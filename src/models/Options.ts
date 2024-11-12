/**
 * Bootstap Mode
 */
export enum BootstrapMode {
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

/** {@inheritDoc BootstrapOptions} */
export interface IBootstrapOptions {
    /** {@inheritDoc BootstrapOptions.mode} */
    mode: BootstrapMode;
    /** {@inheritDoc BootstrapOptions.id} */
    id?: number;
    /** {@inheritDoc BootstrapOptions.sat} */
    sat?: number;
    /** {@inheritDoc BootstrapOptions.index} */
    index?: number;
    /** {@inheritDoc BootstrapOptions.data} */
    data?: any;
    /** {@inheritDoc BootstrapOptions.res} */
    res?: { [_: string]: IBootstrapResource };
    /** {@inheritDoc BootstrapOptions.oo} */
    oo?: IBootstrapOpenOrdinalModules;
    /** {@inheritDoc BootstrapOptions.dev} */
    dev?: string;
}

/** {@inheritDoc BootstrapResource} */
export interface IBootstrapResource {
    /** {@inheritDoc BootstrapResource.id} */
    id?: string;
    /** {@inheritDoc BootstrapResource.sat} */
    sat?: number;
    /** {@inheritDoc BootstrapResource.index} */
    index?: number;
}

/** {@inheritDoc BootstrapOpenOrdinalModules} */
export interface IBootstrapOpenOrdinalModules {
    /** {@inheritDoc BootstrapOpenOrdinalModules.api} */
    api?: boolean;
}

/**
 * Options class
 */
export class BootstrapOptions {
    /**
     * The mode for bootstrapping
     */
    mode: BootstrapMode = BootstrapMode.LoadByMetadataOptionsAndBoot;
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
    res?: { [_: string]: BootstrapResource } | undefined;
    /**
     * Optional: Additional Open Ordinal modules to load
     */
    oo?: BootstrapOpenOrdinalModules | undefined;
    /**
     * Optional: Relative path to module to boot. This is used during development
     * and should never be present in actual inscribed ordinal.
     */
    dev?: string | undefined;

    constructor(options: IBootstrapOptions = { mode: BootstrapMode.LoadByMetadataOptionsAndBoot }) {
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
export class BootstrapResource {
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

    constructor(options: IBootstrapResource) {
        this.id = options.id;
        this.sat = options.sat;
        this.index = options.index ?? -1;
    }
}

/**
 * Open Ordinal Modules Options class
 */
export class BootstrapOpenOrdinalModules {
    /**
     * Option to load Open Ordinal API
     */
    api?: boolean | undefined;

    constructor(options: IBootstrapOpenOrdinalModules = {}) {
        this.api = options.api = false;
    }
}
