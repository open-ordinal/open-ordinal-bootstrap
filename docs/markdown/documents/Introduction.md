[Open Ordial Bootstrap](../README.md) / Introduction

> The documentation is still work in progress. Feedback from developers like you will drive the evolution and completeness of the documentation. Your input is invaluable.
 
# Introduction

The Open Ordinal Bootstrap addresses the challenge of immutability in inscriptions (ordinals). Since inscriptions are inherently immutable, it becomes difficult to create dynamic ordinals using ES-Modules or JavaScript. The bootstrap code provides a solution by introducing a setup process that includes an `Options` object (in `Metadata` or inline) with parameters like `mode`, `id`, `sat`, and `data`. This setup allows the ordinal to be “booted” in different ways, making it more flexible and dynamic.

Additionally, the bootstrap code ensures that the inscription size remains small, optimizing the footprint of the ordinal (root inscription). Various modes are available for bootstrapping, such as loading by inscription ID, loading the latest by inscription ID, loading by sat, and more. These modes enable different ways to dynamically load and render the ordinal with the necessary ES-Modules or JavaScript.

## Goals

- Break out of the immutability of a root inscription.
- Support multiple modes that can simplify multiple use cases.
- Support passing any data into the ordinal.
- Help making the root inscription small.
- Support for loading additional resources when starting.
- Configurability to load Open Ordinal modules (this is Optional).

## Simple Example
Using `mode` 4 will load the latest inscribed module on the supplied `sat` and execute the bootstrap.

Example Inscription
```html
<html>
<head><title>Ordinal</title></head>
<body>
    <div id="message"></div>
    <script type="module">
        import * as ooBS from '/content/<BootstrapInscriptionId>';
        await ooBS.bootstrap({mode:4,sat:"<SatWhereYourModuleIs>",data:{text:"Hello world!"}});
    </script>
</body>
</html>
```

An inscribed module for your ordinal that contain all your logic to boot your ordinal.

Example Module on Sat
```js
module.exports = {
    // This function is called by the bootstrap
    bootstrap: (options, data, resources) => {
        // `options` contain the `options` used when bootstraping
        // `data` contain the `data` for bootstrapping
        // `resources` contain an array of resources that was loaded by the bootstrapper

        // Do the init and setup of the dynamic ordinal here.
        let message = data.text; // message contains now "Hello world!"
        document.getElementById("message").innerHTML = message;
    }
};
```

Since your module is inscribed on a `sat` and the bootstrapper load the latest version that is available. You are now able to update the code for the ordinal.