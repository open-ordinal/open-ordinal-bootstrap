[Open Ordial Bootstrap](../README.md) / Extensions

# Extensions

The Open Ordinal Boostrap have some special extension that can be used during boot. These are helpers for specific use cases. More extensions are planned going forward.

## Automatic loading of additional resources

There's two ways of loading additional resources (inscriptions) before `bootstrap()` is called. This can be used to load assets and other things needed for you oridinal.

### Using res property in Options

If the `res` property of [BootstrapOptions](../OOBS/classes/BootstrapOptions.md) are specified the bootrapper will load these. All kinds of inscriptions can be loaded with this option.

The inscriptions will be loaded after bootstrap is started and before `bootstrap()` is called in the loaded module.

All inscriptions are passed in to the `bootstrap()` function as `resources` as a `Object` containing properties with data-URLs.

Example of Inscription
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';

    await ooBS.bootstrap({
        ...
        res: {
            // Load by Inscription Id
            image: { id: "<InscriptionId>" },
            model: { id: "<InscriptionId>" },
            // Load Sat Id and Index
            javascriptA: { sat: "<SatId>", index: 2 }
            // Load latest by Sat Id
            javascriptB: { sat: "<SatId>" }
        }
        ...
    });
</script>
```

Example of Ordinal code
```js
export async function bootstrap(options, data, resources) {
    // Based on the code above resources will contain:
    // {
    //    image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAA..."
    //    model: "data:model/gltf-binary;base64,Z2xURgIAAADIIQEAeBQ..."
    //    javascriptA: "data:text/javascript;base64,ZXhwb3J0IGFzeW5jIGZ1bm..."
    //    javascriptB: "data:text/javascript;base64,ZXhwb3J0IGFzeW5jIGZ1bm..."
    // }
}
```
