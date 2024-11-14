export async function bootstrap(options, data, resources, ooModules) {
    // `options` contain the `options` used when bootstraping
    // `data` contain the `data` for bootstrapping
    // `resources` contain an array of resources that was loaded by the bootstrapper
    // `ooModules` contain an object with Open Ordinal Modules if they are set in the options
    
    // Do the init and setup of the dynamic ordinal here.
    let message = data.text; // message contains now "Hello world!"
    document.getElementById("message").innerHTML = data.message;
};
