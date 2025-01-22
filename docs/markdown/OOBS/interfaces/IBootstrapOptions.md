[Open Ordial Bootstrap](../../README.md) / [OOBS](../README.md) / IBootstrapOptions

# Interface: IBootstrapOptions

Defined in: [models/Options.ts:28](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L28)

Options class

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md)

Defined in: [models/Options.ts:30](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L30)

The mode for bootstrapping

***

### id?

> `optional` **id**: `number`

Defined in: [models/Options.ts:32](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L32)

Optional: The inscription Id to bootstrap

***

### sat?

> `optional` **sat**: `number`

Defined in: [models/Options.ts:34](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L34)

Optional: The sat Id to bootstrap

***

### index?

> `optional` **index**: `number`

Defined in: [models/Options.ts:36](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L36)

Optional: Index on sat to bootstrap

***

### data?

> `optional` **data**: `any`

Defined in: [models/Options.ts:38](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L38)

Optional: Data to pass into the bootstrap

***

### res?

> `optional` **res**: `object`

Defined in: [models/Options.ts:40](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L40)

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

\[`_`: `string`\]: [`IBootstrapResource`](IBootstrapResource.md)

***

### oo?

> `optional` **oo**: [`IBootstrapOpenOrdinalModules`](IBootstrapOpenOrdinalModules.md)

Defined in: [models/Options.ts:42](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L42)

Optional: Additional Open Ordinal modules to load

***

### dev?

> `optional` **dev**: `string`

Defined in: [models/Options.ts:44](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/12e120e69223fce73e36f2e93bd5388505f495e2/src/models/Options.ts#L44)

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.
