---
title: FAQ
group: Documents
children:
---

# FAQ

### Why is Open Ordinal Bootstrap needed to be included in my inscription as a direct inscription `id` and not via `sat`?
This is a chicken-and-the-egg problem. Until the bootstrap module is loaded there is no way to load via `sat` unless you include that code in your own inscription. This may be something we will provide as a template later.

### The size of Open Ordinal Bootstrap is over 50kb, why?
The inscription contain support for loading metadata from the `ord recursive api`. This functionality need support for `cbor` and `buffer`. In turn this increase the size of the code. Beside this the bootstrap is only loaded once (and cached) for browsers when the inscription is booted (and subsequent inscriptions) so it is not a big issue.

### Will Open Ordinal Bootstrap increase the loading time for the ordinal?
There is some additional hits to the `ord recursive api` that may have minimal impact dependant on the `mode` being used to boot. During our testing in bigger collections and single ordinals being booted this is miniscule and not apparent for the end user.

### Why should the `dev` property in `Options` **not** be present in the inscription on mainnet?
The `dev` property in `Options` are there just for ease development. This makes the bootstrap aware of the module being loaded and that it may be hosted under a local webserver or under a simulated `ord server` (running on other chains than mainnet). When this option is present the bootstrap will do some additional checks for where it is being loaded. These checks are something we do not need when the ordinal is inscribed on the mainnet.