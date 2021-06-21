# API Reference

**Classes**

Name|Description
----|-----------
[Namer](#multi-convention-namer-namer)|*No description*


**Structs**

Name|Description
----|-----------
[NamerProps](#multi-convention-namer-namerprops)|*No description*


**Enums**

Name|Description
----|-----------
[Format](#multi-convention-namer-format)|Too many naming conventions?



## class Namer  <a id="multi-convention-namer-namer"></a>




### Initializer


Create a namer.

```ts
new Namer(parts: Array<string>, props?: NamerProps)
```

* **parts** (<code>Array<string></code>)  an array of strings to be composed into a name.
* **props** (<code>[NamerProps](#multi-convention-namer-namerprops)</code>)  modify the behavior of namer.
  * **defaultFormat** (<code>[Format](#multi-convention-namer-format)</code>)  When using toString(), which format should be provided? __*Default*__: raise an error if no default specified and toString invoked
  * **deleteCharacters** (<code>string</code>)  Characters to strip from name parts. __*Default*__: '-_'
  * **illegalCharacters** (<code>string</code>)  Characters which will cause an error if included in a name part tested AFTER deleteCharacters. __*Default*__: '!
  * **maxLength** (<code>number</code>)  How long can the name be? __*Default*__: no limit
  * **maxLengthTruncateHead** (<code>boolean</code>)  If the name exceeds maxLength, should I snip the head or the tail? __*Default*__: false
  * **maxPartLength** (<code>number</code>)  How long can a part of the name be? __*Default*__: no limit
  * **maxPartLengthTruncateHead** (<code>boolean</code>)  If the part exceeds maxPartLength, should I snip the head or the tail? __*Default*__: false
  * **uniqueSeed** (<code>any</code>)  Include a uniquifying suffix? __*Default*__: do not include a uniquifier



### Properties


Name | Type | Description 
-----|------|-------------
**camel** | <code>string</code> | camelCase.
**kebab** | <code>string</code> | kebab-case.
**parts** | <code>Array<string></code> | <span></span>
**partsWithUnique** | <code>Array<string></code> | <span></span>
**pascal** | <code>string</code> | PascalCase.
**snake** | <code>string</code> | snake_case.
**props**? | <code>[NamerProps](#multi-convention-namer-namerprops)</code> | __*Optional*__

### Methods


#### addPrefix(prefix, props?) <a id="multi-convention-namer-namer-addprefix"></a>

Create a new Namer with the added prefix.

```ts
addPrefix(prefix: Namer &#124; Array<string>, props?: NamerProps): Namer
```

* **prefix** (<code>[Namer](#multi-convention-namer-namer) &#124; Array<string></code>)  the prefix to add.
* **props** (<code>[NamerProps](#multi-convention-namer-namerprops)</code>)  properties to over-ride the parent props.
  * **defaultFormat** (<code>[Format](#multi-convention-namer-format)</code>)  When using toString(), which format should be provided? __*Default*__: raise an error if no default specified and toString invoked
  * **deleteCharacters** (<code>string</code>)  Characters to strip from name parts. __*Default*__: '-_'
  * **illegalCharacters** (<code>string</code>)  Characters which will cause an error if included in a name part tested AFTER deleteCharacters. __*Default*__: '!
  * **maxLength** (<code>number</code>)  How long can the name be? __*Default*__: no limit
  * **maxLengthTruncateHead** (<code>boolean</code>)  If the name exceeds maxLength, should I snip the head or the tail? __*Default*__: false
  * **maxPartLength** (<code>number</code>)  How long can a part of the name be? __*Default*__: no limit
  * **maxPartLengthTruncateHead** (<code>boolean</code>)  If the part exceeds maxPartLength, should I snip the head or the tail? __*Default*__: false
  * **uniqueSeed** (<code>any</code>)  Include a uniquifying suffix? __*Default*__: do not include a uniquifier

__Returns__:
* <code>[Namer](#multi-convention-namer-namer)</code>

#### addSuffix(suffix, props?) <a id="multi-convention-namer-namer-addsuffix"></a>

Create a new Namer with the added suffix.

```ts
addSuffix(suffix: Namer &#124; Array<string>, props?: NamerProps): Namer
```

* **suffix** (<code>[Namer](#multi-convention-namer-namer) &#124; Array<string></code>)  the suffix to add.
* **props** (<code>[NamerProps](#multi-convention-namer-namerprops)</code>)  properties to over-ride the parent props.
  * **defaultFormat** (<code>[Format](#multi-convention-namer-format)</code>)  When using toString(), which format should be provided? __*Default*__: raise an error if no default specified and toString invoked
  * **deleteCharacters** (<code>string</code>)  Characters to strip from name parts. __*Default*__: '-_'
  * **illegalCharacters** (<code>string</code>)  Characters which will cause an error if included in a name part tested AFTER deleteCharacters. __*Default*__: '!
  * **maxLength** (<code>number</code>)  How long can the name be? __*Default*__: no limit
  * **maxLengthTruncateHead** (<code>boolean</code>)  If the name exceeds maxLength, should I snip the head or the tail? __*Default*__: false
  * **maxPartLength** (<code>number</code>)  How long can a part of the name be? __*Default*__: no limit
  * **maxPartLengthTruncateHead** (<code>boolean</code>)  If the part exceeds maxPartLength, should I snip the head or the tail? __*Default*__: false
  * **uniqueSeed** (<code>any</code>)  Include a uniquifying suffix? __*Default*__: do not include a uniquifier

__Returns__:
* <code>[Namer](#multi-convention-namer-namer)</code>

#### enforceMaxLength(raw) <a id="multi-convention-namer-namer-enforcemaxlength"></a>



```ts
enforceMaxLength(raw: string): string
```

* **raw** (<code>string</code>)  *No description*

__Returns__:
* <code>string</code>

#### toString() <a id="multi-convention-namer-namer-tostring"></a>



```ts
toString(): string
```


__Returns__:
* <code>string</code>

#### unique(uniqueItem) <a id="multi-convention-namer-namer-unique"></a>

Create a new Namer with a unique suffix.

```ts
unique(uniqueItem: any): Namer
```

* **uniqueItem** (<code>any</code>)  : any value to use as the seed for generating a unique hash.

__Returns__:
* <code>[Namer](#multi-convention-namer-namer)</code>



## struct NamerProps  <a id="multi-convention-namer-namerprops"></a>






Name | Type | Description 
-----|------|-------------
**defaultFormat**? | <code>[Format](#multi-convention-namer-format)</code> | When using toString(), which format should be provided?<br/>__*Default*__: raise an error if no default specified and toString invoked
**deleteCharacters**? | <code>string</code> | Characters to strip from name parts.<br/>__*Default*__: '-_'
**illegalCharacters**? | <code>string</code> | Characters which will cause an error if included in a name part tested AFTER deleteCharacters.<br/>__*Default*__: '!
**maxLength**? | <code>number</code> | How long can the name be?<br/>__*Default*__: no limit
**maxLengthTruncateHead**? | <code>boolean</code> | If the name exceeds maxLength, should I snip the head or the tail?<br/>__*Default*__: false
**maxPartLength**? | <code>number</code> | How long can a part of the name be?<br/>__*Default*__: no limit
**maxPartLengthTruncateHead**? | <code>boolean</code> | If the part exceeds maxPartLength, should I snip the head or the tail?<br/>__*Default*__: false
**uniqueSeed**? | <code>any</code> | Include a uniquifying suffix?<br/>__*Default*__: do not include a uniquifier



## enum Format  <a id="multi-convention-namer-format"></a>

Too many naming conventions?

Name | Description
-----|-----
**KEBAB** |
**PASCAL** |
**SNAKE** |
**CAMEL** |


