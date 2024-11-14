[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / IBootstrapOptions

# Interface: IBootstrapOptions

Options class

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md)

The mode for bootstrapping

#### Defined in

[models/Options.ts:30](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L30)

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

[models/Options.ts:32](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L32)

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

[models/Options.ts:34](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L34)

***

### index?

> `optional` **index**: `number`

Optional: Index on sat to bootstrap

#### Defined in

[models/Options.ts:36](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L36)

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

[models/Options.ts:38](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L38)

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`IBootstrapResource`](IBootstrapResource.md)

#### Defined in

[models/Options.ts:40](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L40)

***

### oo?

> `optional` **oo**: [`IBootstrapOpenOrdinalModules`](IBootstrapOpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

[models/Options.ts:42](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L42)

***

### dev?

> `optional` **dev**: `string`

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.

#### Defined in

[models/Options.ts:44](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/8b6e3eb87be9e88339623c1725de53a3825c8878/src/models/Options.ts#L44)
