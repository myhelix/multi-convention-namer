# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### NamerProps <a name="NamerProps" id="multi-convention-namer.NamerProps"></a>

#### Initializer <a name="Initializer" id="multi-convention-namer.NamerProps.Initializer"></a>

```typescript
import { NamerProps } from 'multi-convention-namer'

const namerProps: NamerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-convention-namer.NamerProps.property.defaultFormat">defaultFormat</a></code> | <code><a href="#multi-convention-namer.Format">Format</a></code> | When using toString(), which format should be provided? |
| <code><a href="#multi-convention-namer.NamerProps.property.deleteCharacters">deleteCharacters</a></code> | <code>string</code> | Characters to strip from name parts. |
| <code><a href="#multi-convention-namer.NamerProps.property.illegalCharacters">illegalCharacters</a></code> | <code>string</code> | Characters which will cause an error if included in a name part tested AFTER deleteCharacters. |
| <code><a href="#multi-convention-namer.NamerProps.property.maxLength">maxLength</a></code> | <code>number</code> | How long can the name be? |
| <code><a href="#multi-convention-namer.NamerProps.property.maxLengthTruncateHead">maxLengthTruncateHead</a></code> | <code>boolean</code> | If the name exceeds maxLength, should I snip the head or the tail? |
| <code><a href="#multi-convention-namer.NamerProps.property.maxPartLength">maxPartLength</a></code> | <code>number</code> | How long can a part of the name be? |
| <code><a href="#multi-convention-namer.NamerProps.property.maxPartLengthTruncateHead">maxPartLengthTruncateHead</a></code> | <code>boolean</code> | If the part exceeds maxPartLength, should I snip the head or the tail? |
| <code><a href="#multi-convention-namer.NamerProps.property.uniqueSeed">uniqueSeed</a></code> | <code>any</code> | Include a uniquifying suffix? |

---

##### `defaultFormat`<sup>Optional</sup> <a name="defaultFormat" id="multi-convention-namer.NamerProps.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: Format;
```

- *Type:* <a href="#multi-convention-namer.Format">Format</a>
- *Default:* raise an error if no default specified and toString invoked

When using toString(), which format should be provided?

---

##### `deleteCharacters`<sup>Optional</sup> <a name="deleteCharacters" id="multi-convention-namer.NamerProps.property.deleteCharacters"></a>

```typescript
public readonly deleteCharacters: string;
```

- *Type:* string
- *Default:* '-_'

Characters to strip from name parts.

---

##### `illegalCharacters`<sup>Optional</sup> <a name="illegalCharacters" id="multi-convention-namer.NamerProps.property.illegalCharacters"></a>

```typescript
public readonly illegalCharacters: string;
```

- *Type:* string
- *Default:* '!

Characters which will cause an error if included in a name part tested AFTER deleteCharacters.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="multi-convention-namer.NamerProps.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number
- *Default:* no limit

How long can the name be?

---

##### `maxLengthTruncateHead`<sup>Optional</sup> <a name="maxLengthTruncateHead" id="multi-convention-namer.NamerProps.property.maxLengthTruncateHead"></a>

```typescript
public readonly maxLengthTruncateHead: boolean;
```

- *Type:* boolean
- *Default:* false

If the name exceeds maxLength, should I snip the head or the tail?

---

##### `maxPartLength`<sup>Optional</sup> <a name="maxPartLength" id="multi-convention-namer.NamerProps.property.maxPartLength"></a>

```typescript
public readonly maxPartLength: number;
```

- *Type:* number
- *Default:* no limit

How long can a part of the name be?

---

##### `maxPartLengthTruncateHead`<sup>Optional</sup> <a name="maxPartLengthTruncateHead" id="multi-convention-namer.NamerProps.property.maxPartLengthTruncateHead"></a>

```typescript
public readonly maxPartLengthTruncateHead: boolean;
```

- *Type:* boolean
- *Default:* false

If the part exceeds maxPartLength, should I snip the head or the tail?

---

##### `uniqueSeed`<sup>Optional</sup> <a name="uniqueSeed" id="multi-convention-namer.NamerProps.property.uniqueSeed"></a>

```typescript
public readonly uniqueSeed: any;
```

- *Type:* any
- *Default:* do not include a uniquifier

Include a uniquifying suffix?

If so, this is the seed for that suffix.

---

## Classes <a name="Classes" id="Classes"></a>

### Namer <a name="Namer" id="multi-convention-namer.Namer"></a>

#### Initializers <a name="Initializers" id="multi-convention-namer.Namer.Initializer"></a>

```typescript
import { Namer } from 'multi-convention-namer'

new Namer(parts: string[], props?: NamerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-convention-namer.Namer.Initializer.parameter.parts">parts</a></code> | <code>string[]</code> | an array of strings to be composed into a name. |
| <code><a href="#multi-convention-namer.Namer.Initializer.parameter.props">props</a></code> | <code><a href="#multi-convention-namer.NamerProps">NamerProps</a></code> | modify the behavior of namer. |

---

##### `parts`<sup>Required</sup> <a name="parts" id="multi-convention-namer.Namer.Initializer.parameter.parts"></a>

- *Type:* string[]

an array of strings to be composed into a name.

---

##### `props`<sup>Optional</sup> <a name="props" id="multi-convention-namer.Namer.Initializer.parameter.props"></a>

- *Type:* <a href="#multi-convention-namer.NamerProps">NamerProps</a>

modify the behavior of namer.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#multi-convention-namer.Namer.addPrefix">addPrefix</a></code> | Create a new Namer with the added prefix. |
| <code><a href="#multi-convention-namer.Namer.addSuffix">addSuffix</a></code> | Create a new Namer with the added suffix. |
| <code><a href="#multi-convention-namer.Namer.enforceMaxLength">enforceMaxLength</a></code> | *No description.* |
| <code><a href="#multi-convention-namer.Namer.toString">toString</a></code> | *No description.* |
| <code><a href="#multi-convention-namer.Namer.unique">unique</a></code> | Create a new Namer with a unique suffix. |

---

##### `addPrefix` <a name="addPrefix" id="multi-convention-namer.Namer.addPrefix"></a>

```typescript
public addPrefix(prefix: Namer | string[], props?: NamerProps): Namer
```

Create a new Namer with the added prefix.

###### `prefix`<sup>Required</sup> <a name="prefix" id="multi-convention-namer.Namer.addPrefix.parameter.prefix"></a>

- *Type:* <a href="#multi-convention-namer.Namer">Namer</a> | string[]

the prefix to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="multi-convention-namer.Namer.addPrefix.parameter.props"></a>

- *Type:* <a href="#multi-convention-namer.NamerProps">NamerProps</a>

properties to over-ride the parent props.

---

##### `addSuffix` <a name="addSuffix" id="multi-convention-namer.Namer.addSuffix"></a>

```typescript
public addSuffix(suffix: Namer | string[], props?: NamerProps): Namer
```

Create a new Namer with the added suffix.

###### `suffix`<sup>Required</sup> <a name="suffix" id="multi-convention-namer.Namer.addSuffix.parameter.suffix"></a>

- *Type:* <a href="#multi-convention-namer.Namer">Namer</a> | string[]

the suffix to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="multi-convention-namer.Namer.addSuffix.parameter.props"></a>

- *Type:* <a href="#multi-convention-namer.NamerProps">NamerProps</a>

properties to over-ride the parent props.

---

##### `enforceMaxLength` <a name="enforceMaxLength" id="multi-convention-namer.Namer.enforceMaxLength"></a>

```typescript
public enforceMaxLength(raw: string): string
```

###### `raw`<sup>Required</sup> <a name="raw" id="multi-convention-namer.Namer.enforceMaxLength.parameter.raw"></a>

- *Type:* string

---

##### `toString` <a name="toString" id="multi-convention-namer.Namer.toString"></a>

```typescript
public toString(): string
```

##### `unique` <a name="unique" id="multi-convention-namer.Namer.unique"></a>

```typescript
public unique(uniqueItem: any): Namer
```

Create a new Namer with a unique suffix.

###### `uniqueItem`<sup>Required</sup> <a name="uniqueItem" id="multi-convention-namer.Namer.unique.parameter.uniqueItem"></a>

- *Type:* any

: any value to use as the seed for generating a unique hash.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#multi-convention-namer.Namer.property.camel">camel</a></code> | <code>string</code> | camelCase. |
| <code><a href="#multi-convention-namer.Namer.property.kebab">kebab</a></code> | <code>string</code> | kebab-case. |
| <code><a href="#multi-convention-namer.Namer.property.parts">parts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#multi-convention-namer.Namer.property.partsWithUnique">partsWithUnique</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#multi-convention-namer.Namer.property.pascal">pascal</a></code> | <code>string</code> | PascalCase. |
| <code><a href="#multi-convention-namer.Namer.property.snake">snake</a></code> | <code>string</code> | snake_case. |
| <code><a href="#multi-convention-namer.Namer.property.props">props</a></code> | <code><a href="#multi-convention-namer.NamerProps">NamerProps</a></code> | *No description.* |

---

##### `camel`<sup>Required</sup> <a name="camel" id="multi-convention-namer.Namer.property.camel"></a>

```typescript
public readonly camel: string;
```

- *Type:* string

camelCase.

---

##### `kebab`<sup>Required</sup> <a name="kebab" id="multi-convention-namer.Namer.property.kebab"></a>

```typescript
public readonly kebab: string;
```

- *Type:* string

kebab-case.

---

##### `parts`<sup>Required</sup> <a name="parts" id="multi-convention-namer.Namer.property.parts"></a>

```typescript
public readonly parts: string[];
```

- *Type:* string[]

---

##### `partsWithUnique`<sup>Required</sup> <a name="partsWithUnique" id="multi-convention-namer.Namer.property.partsWithUnique"></a>

```typescript
public readonly partsWithUnique: string[];
```

- *Type:* string[]

---

##### `pascal`<sup>Required</sup> <a name="pascal" id="multi-convention-namer.Namer.property.pascal"></a>

```typescript
public readonly pascal: string;
```

- *Type:* string

PascalCase.

---

##### `snake`<sup>Required</sup> <a name="snake" id="multi-convention-namer.Namer.property.snake"></a>

```typescript
public readonly snake: string;
```

- *Type:* string

snake_case.

---

##### `props`<sup>Optional</sup> <a name="props" id="multi-convention-namer.Namer.property.props"></a>

```typescript
public readonly props: NamerProps;
```

- *Type:* <a href="#multi-convention-namer.NamerProps">NamerProps</a>

---



## Enums <a name="Enums" id="Enums"></a>

### Format <a name="Format" id="multi-convention-namer.Format"></a>

Too many naming conventions?

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#multi-convention-namer.Format.KEBAB">KEBAB</a></code> | *No description.* |
| <code><a href="#multi-convention-namer.Format.PASCAL">PASCAL</a></code> | *No description.* |
| <code><a href="#multi-convention-namer.Format.SNAKE">SNAKE</a></code> | *No description.* |
| <code><a href="#multi-convention-namer.Format.CAMEL">CAMEL</a></code> | *No description.* |

---

##### `KEBAB` <a name="KEBAB" id="multi-convention-namer.Format.KEBAB"></a>

---


##### `PASCAL` <a name="PASCAL" id="multi-convention-namer.Format.PASCAL"></a>

---


##### `SNAKE` <a name="SNAKE" id="multi-convention-namer.Format.SNAKE"></a>

---


##### `CAMEL` <a name="CAMEL" id="multi-convention-namer.Format.CAMEL"></a>

---

