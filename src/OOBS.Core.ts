/**
 * Open Ordinal Bootstrap
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOBS
 */

//#region Imports And Exports

import { IBootstrapOptions, BootstrapOptions, IBootstrapResource, BootstrapResource, BootstrapMode } from './models/Options.js'
export * from './models/Options.js'

//OOMD Inports
import * as OOMD from "@open-ordinal/metadata";

import { decode } from 'cbor-x';
import { Buffer } from 'buffer';

//#endregion

//#region Privates

let _baseUrl = "";
let _development = false;
let _recursiveAvailable = true;

//#endregion

//#region Interfaces

declare global {
    interface Window {
        ooBS?: any;
        ooAPI?: any;
    }
}

//#endregion

//#region Bootstap Main Functions

/**
 * Initialize the bootstrapper
 * 
 * @param {IBootstrapOptions} options Options for bootstrap
 * @returns {Promise<void>} A promise when bootstrapping is done
 */
export async function bootstrap(options: IBootstrapOptions): Promise<void> {
    if (!options) {
        options = { mode: 0 };
    }
    if (options.dev) {
        _development = true;
        _recursiveAvailable = await recursiveAvailable();
    }
    if (_recursiveAvailable) {
        let resources: { [key: string]: string } | undefined;
        switch (options.mode) {
            case BootstrapMode.LoadByMetadataOptionsAndBoot: // 0
                // Load Inscription Metadata and Boot (Default)
                // Required: Options in Metadata (Bootstrap protocol)
                if (options.res) {
                    resources = await loadInscriptionResources(options.res);
                }

                var metadata = await getInscriptionMetadata();
                if (metadata.bootstrap) {
                    await bootstrap(metadata.bootstrap);
                } else {
                    err("'Metadata' for inscription do not contain the 'bootstrap' protocol.");
                }
                break;
            case BootstrapMode.LoadByInscriptionIdAndBoot: // 1
                // Load Inscription Directly by Id and Boot
                // Required: id
                if (options.res) {
                    resources = await loadInscriptionResources(options.res);
                }

                if (options.id) {
                    try {
                        let dynamicModuleUrl = await getInscriptionContentUrl(options.id.toString());
                        const dynamicModule = await import(/* webpackIgnore: true */`${dynamicModuleUrl}`);
                        if (typeof dynamicModule.bootstrap === "function") {
                            let ooModules: any = {};
                            if (options.oo) {
                                ooModules = await loadOpenOrdinalModules(options);
                            }
                            dynamicModule.bootstrap(options, options.data, resources, ooModules);
                        } else {
                            err("'bootstrap()' is not exported in imported module.");
                        }
                    } catch (error) {
                        err("Unable to load module.");
                    }
                } else {
                    err("Missing SAT and / or Index for 'LoadByInscriptionIdAndBoot'.");
                }
                break;
            case BootstrapMode.LoadLatestByInscriptionIdAndBoot: // 2
                // Load Inscription via Id and then via it's SAT and fetch Latest and Boot
                // Required: id
                if (options.res) {
                    resources = await loadInscriptionResources(options.res);
                }

                if (options.id) {
                    try {
                        var insciptionData = await getInscription(options.id.toString());
                        let satData = await getSatAt(insciptionData.sat, -1);
                        let latestInscriptionId = satData.id;
                        let dynamicModuleUrl = await getInscriptionContentUrl(latestInscriptionId);
                        const dynamicModule = await import(/* webpackIgnore: true */`${dynamicModuleUrl}`);
                        if (typeof dynamicModule.bootstrap === "function") {
                            let ooModules: any = {};
                            if (options.oo) {
                                ooModules = await loadOpenOrdinalModules(options);
                            }
                            dynamicModule.bootstrap(options, options.data, resources, ooModules);
                        } else {
                            err("'bootstrap()' is not exported in imported module.");
                        }
                    } catch (error) {
                        err("Unable to load module.");
                    }
                } else {
                    err("Missing SAT and / or Index for 'LoadByInscriptionIdAndBoot'.");
                }
                break;
            case BootstrapMode.LoadIndexBySatAndBoot: // 3
                // Load specified index via SAT and Boot
                // Required: sat
                if (options.res) {
                    resources = await loadInscriptionResources(options.res);
                }

                if (options.sat && options.index) {
                    let satData = await getSatAt(options.sat, options.index);
                    let latestInscriptionId = satData.id;
                    try {
                        let dynamicModuleUrl = await getInscriptionContentUrl(latestInscriptionId);
                        const dynamicModule = await import(/* webpackIgnore: true */`${dynamicModuleUrl}`);
                        if (typeof dynamicModule.bootstrap === "function") {
                            let ooModules: any = {};
                            if (options.oo) {
                                ooModules = await loadOpenOrdinalModules(options);
                            }
                            dynamicModule.bootstrap(options, options.data, resources, ooModules);
                        } else {
                            err("'bootstrap()' is not exported in imported module.");
                        }
                    } catch (error) {
                        err("Unable to load module.");
                    }
                } else {
                    err("Missing SAT and / or Index for 'LoadIndexBySatAndBoot'.");
                }
                break;
            case BootstrapMode.LoadLatestBySatAndBoot: // 4
                // Load Latest Inscription via SAT and Boot
                // Required: sat
                if (options.res) {
                    resources = await loadInscriptionResources(options.res);
                }

                if (options.sat) {
                    let satData = await getSatAt(options.sat, -1);
                    let latestInscriptionId = satData.id;
                    try {
                        let dynamicModuleUrl = await getInscriptionContentUrl(latestInscriptionId);
                        const dynamicModule = await import(/* webpackIgnore: true */`${dynamicModuleUrl}`);
                        if (typeof dynamicModule.bootstrap === "function") {
                            let ooModules: any = {};
                            if (options.oo) {
                                ooModules = await loadOpenOrdinalModules(options);
                            }
                            dynamicModule.bootstrap(options, options.data, resources, ooModules);
                        } else {
                            err("'bootstrap()' is not exported in imported module.");
                        }
                    } catch (error) {
                        err("Unable to load module.");
                    }
                } else {
                    err("Missing SAT for 'LoadLatestBySatAndBoot'.");
                }
                break;
        }
    } else {
        //Fallback to develop
        if (_development) {
            let resources: { [key: string]: string } | undefined;
            if (options.res) {
                resources = await loadInscriptionResources(options.res);
            }

            const dynamicModule = await import(/* webpackIgnore: true */`${options.dev}`);
            if (typeof dynamicModule.bootstrap === "function") {
                let ooModules: any = {};
                if (options.oo) {
                    ooModules = await loadOpenOrdinalModules(options);
                }
                dynamicModule.bootstrap(options, options.data, resources, ooModules);
            } else {
                err("bootstrap() is not exported in imported module.");
            }
        }
    }
}

//#endregion

//#region Core Functionality - Recursive

/**
 * Asynchronously retrieves the internal metadata for a given ID.
 * 
 * @param {string} id - The unique identifier for the metadata.
 * @returns {Promise<OOMD.Metadata>} - A promise that resolves to the metadata object.
 */
async function getMetadata(id: string): Promise<OOMD.Metadata> {
    // Check if metadata is undefined or if a new ID is provided, then fetch the metadata
    return await getInscriptionMetadata(id);
}

/**
 * Asynchronously retrieves metadata for a given inscription ID.
 * 
 * @param {string} [inscriptionId=getId()] - The unique identifier for the inscription. Defaults to the result of getId().
 * @param {string} [baseUrl=_baseUrl] - The base URL for the API endpoint. Defaults to _baseUrl.
 * @returns {Promise<OOMD.Metadata>} - A promise that resolves to the metadata object.
 * @throws Will throw an error if the fetch operation fails or if the response is not OK.
 */
async function getInscriptionMetadata(inscriptionId = getInscriptionIdFromUrl(), baseUrl = _baseUrl): Promise<OOMD.Metadata> {
    // Fetch the metadata for the given inscription ID from the API endpoint
    const response = await fetch(prepareUrl(`/r/metadata/${inscriptionId}`, baseUrl));

    // Check if the response is not OK (status code outside the range 200-299)
    if (!response.ok) {
        err("No inscription for Id");
    }

    // Parse the response as a JSON string containing hexadecimal data
    const dataCBORasHexString = await response.json();

    // Convert the hexadecimal string to a buffer
    var dataAsBuffer = new Uint8Array(dataCBORasHexString.match(/[\da-f]{2}/gi).map(function (hex: string) {
        return parseInt(hex, 16)
    }));

    // Decode the buffer into the metadata object
    const data = decode(dataAsBuffer) as OOMD.Metadata;

    // Return the decoded metadata
    return data;
}

async function recursiveAvailable(baseUrl = _baseUrl): Promise<boolean> {
    try {
        const response = await fetch(`${baseUrl}/r/blockheight`);
        if (response.status === 200) {
            return isNumber(await response.text());
        }
        return false;
    } catch (error) {
        return false;
    }
};

/**
 * Get the Inscription info.
 * 
 * @param {str4ing} inscriptionId The inscription Id
 * @param {string} baseUrl Optional base URL
 * @returns {Promise<any>} The Inscrption info
 */
async function getInscription(inscriptionId: string, baseUrl = _baseUrl): Promise<any> {
    try {
        const response = await fetch(`${baseUrl}/r/inscription/${inscriptionId}`);
        if (!response.ok) {
            return null;
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
};

/**
 * Get the Inscription content.
 * 
 * @param {str4ing} inscriptionId The inscription Id
 * @param {string} baseUrl Optional base URL
 * @returns {Promise<any>} The Inscrption info
 */
async function getInscriptionContent(inscriptionId: string, baseUrl = _baseUrl): Promise<any> {
    try {
        const response = await fetch(`${baseUrl}/content/${inscriptionId}`);
        if (!response.ok) {
            return null;
        }
        return await response.text();
    } catch (error) {
        throw error;
    }
};

/**
 * Get the Inscription content URL.
 * 
 * @param {str4ing} inscriptionId The inscription Id
 * @param {string} baseUrl Optional base URL
 * @returns {Promise<any>} The Inscrption info
 */
async function getInscriptionContentUrl(inscriptionId: string, baseUrl = _baseUrl): Promise<string> {
    return `${baseUrl}/content/${inscriptionId}`;
};

/**
 * Fetches a single inscription on a sat based on index.
 * If index is not provided, it defaults to -1, which fetches the most recent inscription.
 * 
 * @param {string} sat - The sat to fetch the inscription from.
 * @param {number} index - The index of the inscription to fetch. Defaults to -1.
 * @param {origin} baseUrl - Optinal baseUrl for the fetch.
 * @returns {Promise<{id: string}>} A promise that resolves with the fetched inscriptionId.
 */
async function getSatAt(sat: number, index: number = -1, baseUrl: string = _baseUrl): Promise<any> {
    const response = await fetch(`${baseUrl}/r/sat/${sat}/at/${index}`);
    return response.json();
};

/**
 * Get the latest Id for a supplied Id trough Sat endpoint.
 * 
 * @param {string} id Inscription Id
 * @returns {string} Latest Id for Inscription
 */
async function getLatestId(id: string): Promise<string> {
    const inscription = await getInscription(id);
    if (inscription.sat !== null) {
        return (await getSatAt(inscription.sat)).id;
    }
    return id;
}

/**
 * Get the path for the latest inscription for a given path.
 * 
 * @param {string} path Path to inscription
 * @returns {string} Path to inscription
 */
async function getLatestPath(path: string): Promise<string> {
    let prefix = new String("/content/"); //Webpack workarround.
    if (path.startsWith(prefix.toString())) {
        let id = path.substring(prefix.length);
        id = await getLatestId(id);
        path = prefix + id;
    }
    return path;
}

//#endregion

//#region General Helpers

/**
 * Loads inscription resources based on the provided options.
 *
 * @param {[_: string]: IBootstrapResource} res - An object containing the resources to be loaded.
 * @returns {Promise<{ [_: string]: string } | undefined>} A promise that resolves to an object containing the loaded resources as data URLs, or undefined if no resources are loaded.
 */
async function loadInscriptionResources(res: { [_: string]: IBootstrapResource }): Promise<{ [_: string]: string } | undefined> {
    let resources: { [_: string]: string } | undefined;
    try {
        // Iterate over each resource entry
        for (/* webpackIgnore: true */const [key, value] of Object.entries(res)) {
            var typedValue = value as IBootstrapResource;
            // Load resources that are referenced by id
            if (typedValue.id) {
                let url = await getInscriptionContentUrl(typedValue.id);
                let data = await fetchAndConvertToDataURL(url);
                if (data) {
                    if (resources == undefined) resources = {};
                    resources[key] = data.toString();
                }
            }
            // Load resources that are referenced by sat
            if (typedValue.sat) {
                let satData = await getSatAt(typedValue.sat, typedValue.index);
                let inscriptionId = satData.id;
                let url = await getInscriptionContentUrl(inscriptionId);
                let data = await fetchAndConvertToDataURL(url);
                if (data) {
                    if (resources == undefined) resources = {};
                    resources[key] = data.toString();
                }
            }
        }
    } catch (error) {
        err("Unable to load resources supplied.");
    }
    return resources;
}

/**
 * Loads Open Ordinal modules based on the provided options.
 *
 * @group Main
 * @param {BootstrapOptions} options - The options for loading the modules.
 * @returns {Promise<any>} A promise that resolves to an object containing the loaded modules.
 */
async function loadOpenOrdinalModules(options: BootstrapOptions): Promise<any> {
    let ooModules: any = {};

    // Check if the Open Ordinal API should be loaded
    if (options.oo?.api === true) {
        let satData = await getSatAt(156280470160431, -1);
        if (satData.id) {
            let dynamicAPIModuleUrl = await getInscriptionContentUrl(satData.id);
            // Import the dynamic API module
            let ooAPI = await import(/* webpackIgnore: true */`${dynamicAPIModuleUrl}`);
            ooModules.ooAPI = ooAPI;
            window.ooAPI = ooAPI;
        }
    }

    return ooModules;
}

/**
 * Extracts the inscription ID from the current URL.
 * 
 * @returns {string} - The inscription ID extracted from the URL, or an empty string if the URL is invalid.
 */
function getInscriptionIdFromUrl(): string {
    const parts = window.location.pathname.split("/");
    const lookFor: string[] = ['content', 'preview', 'inscription'];
    if (parts.some(item => lookFor.includes(item))) {
        return parts[parts.length - 1];
    } else {
        return "";
    }
}

/**
 * Retrieves the base URL from the current window location.
 *
 * @group Main
 * @returns {string} The base URL.
 */
function getBaseUrl(): string {
    const parts = window.location.pathname.split("/");
    // Define the keywords to look for in the pathname
    const lookFor: string[] = ['content', 'preview', 'inscription', 'r'];
    let urlOut: string[] = [];

    if (parts.some(item => lookFor.includes(item))) {
        for (let index = 0; index < parts.length; index++) {
            if (lookFor.includes(parts[index]))
                break;
            urlOut.push(parts[index]);
        }
        return urlOut.join("/");
    } else {
        return window.location.origin;
    }
}

/**
 * Prepares a URL by appending the base URL if the provided URL is relative.
 * 
 * @param {string} url - The URL to be prepared.
 * @param {string} baseUrl - The base URL to be appended if the URL is relative.
 * @returns {string} The prepared URL.
 */
function prepareUrl(url: string, baseUrl: string) {
    if (url.includes("http"))
        return url;
    return `${baseUrl}${url}`;
}

/**
 * Fetches a resource from the given URL and converts it to a Data URL.
 * 
 * @param {string} url - The URL of the resource to fetch.
 * @returns {Promise<string | ArrayBuffer | undefined | null>} A promise that resolves to a Data URL string, an ArrayBuffer, or null if an error occurs.
 */
async function fetchAndConvertToDataURL(url: string): Promise<string | ArrayBuffer | undefined | null> {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();

    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function isNumber(input: string): boolean {
    const pattern = /^-?\d+(\.\d+)?$/;
    return pattern.test(input);
}

function log(message: string) {
    console.log(message);
}

function err(message: string) {
    console.error(message);
}

//#endregion

//#region On Load Triggers

_baseUrl = getBaseUrl();

//#endregion