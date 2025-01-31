[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / BootstrapOptions

# Class: BootstrapOptions

Defined in: [models/Options.ts:70](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L70)

Options class

## Constructors

### new BootstrapOptions()

> **new BootstrapOptions**(`options`): [`BootstrapOptions`](BootstrapOptions.md)

Defined in: [models/Options.ts:105](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L105)

#### Parameters

##### options

[`IBootstrapOptions`](../interfaces/IBootstrapOptions.md) = `...`

#### Returns

[`BootstrapOptions`](BootstrapOptions.md)

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md) = `BootstrapMode.LoadByMetadataOptionsAndBoot`

Defined in: [models/Options.ts:74](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L74)

The mode for bootstrapping

***

### id?

> `optional` **id**: `number`

Defined in: [models/Options.ts:78](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L78)

Optional: The inscription Id to bootstrap

***

### sat?

> `optional` **sat**: `number`

Defined in: [models/Options.ts:82](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L82)

Optional: The sat Id to bootstrap

***

### index?

> `optional` **index**: `number` = `-1`

Defined in: [models/Options.ts:86](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L86)

Optional: Index on sat to bootstrap

***

### data?

> `optional` **data**: `any`

Defined in: [models/Options.ts:90](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L90)

Optional: Data to pass into the bootstrap

***

### res?

> `optional` **res**: `object`

Defined in: [models/Options.ts:94](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L94)

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

\[`_`: `string`\]: [`BootstrapResource`](BootstrapResource.md)

***

### oo?

> `optional` **oo**: [`BootstrapOpenOrdinalModules`](BootstrapOpenOrdinalModules.md)

Defined in: [models/Options.ts:98](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L98)

Optional: Additional Open Ordinal modules to load

***

### dev?

> `optional` **dev**: `string`

Defined in: [models/Options.ts:103](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/53ec9850e3d068ec01c256bc830a523a38d8cf6f/src/models/Options.ts#L103)

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.
