# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### NamerProps <a name="multi-convention-namer.NamerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamerProps } from 'multi-convention-namer'

const namerProps: NamerProps = { ... }
```

##### `defaultFormat`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.defaultFormat"></a>

```typescript
public readonly defaultFormat: Format;
```

- *Type:* [`multi-convention-namer.Format`](#multi-convention-namer.Format)
- *Default:* raise an error if no default specified and toString invoked

When using toString(), which format should be provided?

---

##### `deleteCharacters`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.deleteCharacters"></a>

```typescript
public readonly deleteCharacters: string;
```

- *Type:* `string`
- *Default:* '-_'

Characters to strip from name parts.

---

##### `illegalCharacters`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.illegalCharacters"></a>

```typescript
public readonly illegalCharacters: string;
```

- *Type:* `string`
- *Default:* '!

Characters which will cause an error if included in a name part tested AFTER deleteCharacters.

---

##### `maxLength`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* `number`
- *Default:* no limit

How long can the name be?

---

##### `maxLengthTruncateHead`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.maxLengthTruncateHead"></a>

```typescript
public readonly maxLengthTruncateHead: boolean;
```

- *Type:* `boolean`
- *Default:* false

If the name exceeds maxLength, should I snip the head or the tail?

---

##### `maxPartLength`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.maxPartLength"></a>

```typescript
public readonly maxPartLength: number;
```

- *Type:* `number`
- *Default:* no limit

How long can a part of the name be?

---

##### `maxPartLengthTruncateHead`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.maxPartLengthTruncateHead"></a>

```typescript
public readonly maxPartLengthTruncateHead: boolean;
```

- *Type:* `boolean`
- *Default:* false

If the part exceeds maxPartLength, should I snip the head or the tail?

---

##### `uniqueSeed`<sup>Optional</sup> <a name="multi-convention-namer.NamerProps.property.uniqueSeed"></a>

```typescript
public readonly uniqueSeed: any;
```

- *Type:* `any`
- *Default:* do not include a uniquifier

Include a uniquifying suffix?

If so, this is the seed for that suffix.

---

## Classes <a name="Classes"></a>

### Namer <a name="multi-convention-namer.Namer"></a>

#### Initializers <a name="multi-convention-namer.Namer.Initializer"></a>

```typescript
import { Namer } from 'multi-convention-namer'

new Namer(parts: string[], props?: NamerProps)
```

##### `parts`<sup>Required</sup> <a name="multi-convention-namer.Namer.parameter.parts"></a>

- *Type:* `string`[]

an array of strings to be composed into a name.

---

##### `props`<sup>Optional</sup> <a name="multi-convention-namer.Namer.parameter.props"></a>

- *Type:* [`multi-convention-namer.NamerProps`](#multi-convention-namer.NamerProps)

modify the behavior of namer.

---

#### Methods <a name="Methods"></a>

##### `addPrefix` <a name="multi-convention-namer.Namer.addPrefix"></a>

```typescript
public addPrefix(prefix: Namer | string[], props?: NamerProps)
```

###### `prefix`<sup>Required</sup> <a name="multi-convention-namer.Namer.parameter.prefix"></a>

- *Type:* [`multi-convention-namer.Namer`](#multi-convention-namer.Namer) | `string`[]

the prefix to add.

---

###### `props`<sup>Optional</sup> <a name="multi-convention-namer.Namer.parameter.props"></a>

- *Type:* [`multi-convention-namer.NamerProps`](#multi-convention-namer.NamerProps)

properties to over-ride the parent props.

---

##### `addSuffix` <a name="multi-convention-namer.Namer.addSuffix"></a>

```typescript
public addSuffix(suffix: Namer | string[], props?: NamerProps)
```

###### `suffix`<sup>Required</sup> <a name="multi-convention-namer.Namer.parameter.suffix"></a>

- *Type:* [`multi-convention-namer.Namer`](#multi-convention-namer.Namer) | `string`[]

the suffix to add.

---

###### `props`<sup>Optional</sup> <a name="multi-convention-namer.Namer.parameter.props"></a>

- *Type:* [`multi-convention-namer.NamerProps`](#multi-convention-namer.NamerProps)

properties to over-ride the parent props.

---

##### `enforceMaxLength` <a name="multi-convention-namer.Namer.enforceMaxLength"></a>

```typescript
public enforceMaxLength(raw: string)
```

###### `raw`<sup>Required</sup> <a name="multi-convention-namer.Namer.parameter.raw"></a>

- *Type:* `string`

---

##### `toString` <a name="multi-convention-namer.Namer.toString"></a>

```typescript
public toString()
```

##### `unique` <a name="multi-convention-namer.Namer.unique"></a>

```typescript
public unique(uniqueItem: any)
```

###### `uniqueItem`<sup>Required</sup> <a name="multi-convention-namer.Namer.parameter.uniqueItem"></a>

- *Type:* `any`

: any value to use as the seed for generating a unique hash.

---


#### Properties <a name="Properties"></a>

##### `camel`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.camel"></a>

```typescript
public readonly camel: string;
```

- *Type:* `string`

camelCase.

---

##### `kebab`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.kebab"></a>

```typescript
public readonly kebab: string;
```

- *Type:* `string`

kebab-case.

---

##### `parts`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.parts"></a>

```typescript
public readonly parts: string[];
```

- *Type:* `string`[]

---

##### `partsWithUnique`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.partsWithUnique"></a>

```typescript
public readonly partsWithUnique: string[];
```

- *Type:* `string`[]

---

##### `pascal`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.pascal"></a>

```typescript
public readonly pascal: string;
```

- *Type:* `string`

PascalCase.

---

##### `snake`<sup>Required</sup> <a name="multi-convention-namer.Namer.property.snake"></a>

```typescript
public readonly snake: string;
```

- *Type:* `string`

snake_case.

---

##### `props`<sup>Optional</sup> <a name="multi-convention-namer.Namer.property.props"></a>

```typescript
public readonly props: NamerProps;
```

- *Type:* [`multi-convention-namer.NamerProps`](#multi-convention-namer.NamerProps)

---



## Enums <a name="Enums"></a>

### Format <a name="Format"></a>

Too many naming conventions?

#### `KEBAB` <a name="multi-convention-namer.Format.KEBAB"></a>

---


#### `PASCAL` <a name="multi-convention-namer.Format.PASCAL"></a>

---


#### `SNAKE` <a name="multi-convention-namer.Format.SNAKE"></a>

---


#### `CAMEL` <a name="multi-convention-namer.Format.CAMEL"></a>

---

