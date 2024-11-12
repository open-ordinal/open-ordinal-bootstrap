---
title: Modes
group: Documents
children:
---

# Bootstrap Modes

## Load By Metadata Options And Boot

Ths `mode` (0) (Default) is used to read the `Metadata` for the inscription and pass this to the bootstrapper. This is used when you put the `Options` in the `Metadata` and not inline in the inscription. If no `Options` protocol is available in the `Metadata` this will not do anything.

All variants of `mode` beside 0 is supported in the `Metadata`.

The protocol is defined in [Open Ordinal Metadata](https://openordinal.dev/docs/open-ordinal-metadata).

Example
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';
    await ooBS.bootstrap();
</script>
```
Metadata
```json
{
    "bootstrap": {
        "mode": 4,
        "sat": 156280470238361, // Sat where your module is
        "data": {}
    }
}
```

## Load By Inscription Id And Boot

Ths `mode` (1) is normally used to load a ES-Module / Javascript and pass in the `data` to the ordinal. This mode do not enable any dynamic resolve of what ES-Module / JavaScript is loaded (it is hard coded).

Example
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';
    await ooBS.bootstrap({
        mode: 1,
        id: "inscriptionId",
        data: {}
    });
</script>
```

## Load Latest By Inscription Id And Boot

This `mode` (2) is used to load a specific inscription Id and resolving this to a `sat` and then loading the latest inscription for that `sat` and "booting" the ordinal with this ES-Module / Javascript and pass in the `data` to the ordinal.

Example
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';
    await ooBS.bootstrap({
        mode: 2,
        id: "inscriptionId",
        data: {}
    });
</script>
```

## Load Index By Sat And Boot

This `Mode` (3) is used to load a specific `sat` for a inscription and then "booting" the ordinal with the ES-Module / Javascript on that index and pass in the `data` to the ordinal.

Example
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';
    await ooBS.bootstrap({
        mode: 3,
        sat: 156280470238361,
        index: 2,
        data: {}
    });
</script>
```

## Load Latest By Sat And Boot

This `Mode` (4) is used to load the latest inscription to a `Sat` and then "booting" the ordinal with this ES-Module / Javascript and pass in the `data` to the ordinal.

Example
```html
<script type="module">
    import * as ooBS from '/content/<BootstrapInscriptionId>';
    await ooBS.bootstrap({
        mode: 4,
        sat: 156280470238361,
        data: {}
    });
</script>
```
