[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / Options

# Class: Options

Options class

## Constructors

### new Options()

> **new Options**(`options`): [`Options`](Options.md)

#### Parameters

• **options**: [`IOptions`](../interfaces/IOptions.md) = `...`

#### Returns

[`Options`](Options.md)

#### Defined in

models/Options.ts:101

## Properties

### mode

> **mode**: [`Mode`](../enumerations/Mode.md) = `Mode.LoadByMetadataOptionsAndBoot`

The mode for bootstrapping

#### Defined in

models/Options.ts:70

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

models/Options.ts:74

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

models/Options.ts:78

***

### index?

> `optional` **index**: `number` = `-1`

Optional: Index on sat to bootstrap

#### Defined in

models/Options.ts:82

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

models/Options.ts:86

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`Resource`](Resource.md)

#### Defined in

models/Options.ts:90

***

### oo?

> `optional` **oo**: [`OpenOrdinalModules`](OpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

models/Options.ts:94

***

### dev?

> `optional` **dev**: `string`

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.

#### Defined in

models/Options.ts:99
