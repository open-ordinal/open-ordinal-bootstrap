[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / BootstrapOptions

# Class: BootstrapOptions

Options class

## Constructors

### new BootstrapOptions()

> **new BootstrapOptions**(`options`): [`BootstrapOptions`](BootstrapOptions.md)

#### Parameters

• **options**: [`IBootstrapOptions`](../interfaces/IBootstrapOptions.md) = `...`

#### Returns

[`BootstrapOptions`](BootstrapOptions.md)

#### Defined in

[models/Options.ts:101](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L101)

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md) = `BootstrapMode.LoadByMetadataOptionsAndBoot`

The mode for bootstrapping

#### Defined in

[models/Options.ts:70](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L70)

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

[models/Options.ts:74](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L74)

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

[models/Options.ts:78](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L78)

***

### index?

> `optional` **index**: `number` = `-1`

Optional: Index on sat to bootstrap

#### Defined in

[models/Options.ts:82](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L82)

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

[models/Options.ts:86](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L86)

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`BootstrapResource`](BootstrapResource.md)

#### Defined in

[models/Options.ts:90](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L90)

***

### oo?

> `optional` **oo**: [`BootstrapOpenOrdinalModules`](BootstrapOpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

[models/Options.ts:94](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L94)

***

### dev?

> `optional` **dev**: `string`

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.

#### Defined in

[models/Options.ts:99](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4c10c1c7d08e64d9389b8371356c764525d9fbc7/src/models/Options.ts#L99)
