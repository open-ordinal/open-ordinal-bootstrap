/**
 * Bootstap Mode
 */
export enum Mode {
    /**
     * Load Inscription Metadata and Boot using supplied Options (Default)
     */
    LoadByMetadataOptionsAndBoot = 0,
    /**
     * Load Inscription Directly by Id and Boot
     */
    LoadByInscriptionIdAndBoot = 1,
    /**
     * Load Inscription via Id and then via it's SAT and fetch Latest and Boot
     */
    LoadLatestByInscriptionIdAndBoot = 2,
    /**
     * Load specified index via SAT and Boot
     */
    LoadIndexBySatAndBoot = 3,
    /**
     * Load Latest Inscription via SAT and Boot
     */
    LoadLatestBySatAndBoot = 4,
}

/** {@inheritDoc Options} */
export interface IOptions {
    /** {@inheritDoc Options.mode} */
    mode: Mode;
    /** {@inheritDoc Options.id} */
    id?: number;
    /** {@inheritDoc Options.sat} */
    sat?: number;
    /** {@inheritDoc Options.index} */
    index?: number;
    /** {@inheritDoc Options.data} */
    data?: any;
    /** {@inheritDoc Options.res} */
    res?: { [_: string]: IResource };
    /** {@inheritDoc Options.oo} */
    oo?: IOpenOrdinalModules;
    /** {@inheritDoc Options.dev} */
    dev?: string;
}

/** {@inheritDoc Resource} */
export interface IResource {
    /** {@inheritDoc Resource.id} */
    id?: string;
    /** {@inheritDoc Resource.sat} */
    sat?: number;
    /** {@inheritDoc Resource.index} */
    index?: number;
}

/** {@inheritDoc OpenOrdinalModules} */
export interface IOpenOrdinalModules {
    /** {@inheritDoc OpenOrdinalModules.api} */
    api?: boolean;
}

/**
 * Options class
 */
export class Options {
    /**
     * The mode for bootstrapping
     */
    mode: Mode = Mode.LoadByMetadataOptionsAndBoot;
    /**
     * Optional: The inscription Id to bootstrap
     */
    id?: number | undefined;
    /**
     * Optional: The sat Id to bootstrap
     */
    sat?: number | undefined;
    /**
     * Optional: Index on sat to bootstrap
     */
    index?: number | undefined = -1;
    /**
     * Optional: Data to pass into the bootstrap
     */
    data?: any | undefined;
    /**
     * Optional: Additional inscriptions to load and pass into `bootstrap()`
     */
    res?: { [_: string]: Resource } | undefined;
    /**
     * Optional: Additional Open Ordinal modules to load
     */
    oo?: OpenOrdinalModules | undefined;
    /**
     * Optional: Relative path to module to boot. This is used during development
     * and should never be present in actual inscribed ordinal.
     */
    dev?: string | undefined;

    constructor(options: IOptions = { mode: Mode.LoadByMetadataOptionsAndBoot }) {
        this.mode = options.mode;
        this.id = options.id;
        this.sat = options.sat;
        this.index = options.index ?? -1;
        this.data = options.data;
        this.res = options.res;
        this.dev = options.dev;
    }
}

/**
 * Resource class
 */
export class Resource {
    /**
     * Optional: The inscription Id to include
     */
    id?: string | undefined;
    /**
     * Optional: The sat Id to include
     */
    sat?: number | undefined;
    /**
     * Optional: Index on sat to bootstrap
     */
    index?: number | undefined = -1;

    constructor(options: IResource) {
        this.id = options.id;
        this.sat = options.sat;
        this.index = options.index ?? -1;
    }
}

/**
 * Open Ordinal Modules Options class
 */
export class OpenOrdinalModules {
    /**
     * Option to load Open Ordinal API
     */
    api?: boolean | undefined;

    constructor(options: IOpenOrdinalModules = {}) {
        this.api = options.api = false;
    }
}
