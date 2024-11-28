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

[models/Options.ts:103](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L103)

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md) = `BootstrapMode.LoadByMetadataOptionsAndBoot`

The mode for bootstrapping

#### Defined in

[models/Options.ts:72](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L72)

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

[models/Options.ts:76](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L76)

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

[models/Options.ts:80](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L80)

***

### index?

> `optional` **index**: `number` = `-1`

Optional: Index on sat to bootstrap

#### Defined in

[models/Options.ts:84](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L84)

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

[models/Options.ts:88](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L88)

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`BootstrapResource`](BootstrapResource.md)

#### Defined in

[models/Options.ts:92](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L92)

***

### oo?

> `optional` **oo**: [`BootstrapOpenOrdinalModules`](BootstrapOpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

[models/Options.ts:96](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L96)

***

### dev?

> `optional` **dev**: `string`

Optional: Relative path to module to boot. This is used during development
and should never be present in actual inscribed ordinal.

#### Defined in

[models/Options.ts:101](https://github.com/open-ordinal/open-ordinal-bootstrap/blob/4a183b572bb3a62fef45dc5a91a90ee41306266c/src/models/Options.ts#L101)
