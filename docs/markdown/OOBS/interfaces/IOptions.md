[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / IOptions

# Interface: IOptions

Options class

## Properties

### mode

> **mode**: [`Mode`](../enumerations/Mode.md)

The mode for bootstrapping

#### Defined in

models/Options.ts:30

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

models/Options.ts:32

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

models/Options.ts:34

***

### index?

> `optional` **index**: `number`

Optional: Index on sat to bootstrap

#### Defined in

models/Options.ts:36

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

models/Options.ts:38

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`IResource`](IResource.md)

#### Defined in

models/Options.ts:40

***

### oo?

> `optional` **oo**: [`IOpenOrdinalModules`](IOpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

models/Options.ts:42

***

### dev?

> `optional` **dev**: `string`

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.

#### Defined in

models/Options.ts:44
