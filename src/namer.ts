import * as crypto from 'crypto';

/**
 * Too many naming conventions?
 */
export enum Format {
  KEBAB = 'kebab',
  PASCAL = 'pascal',
  SNAKE = 'snake',
  CAMEL = 'camel',
}

export interface NamerProps {
  /**
   * Characters to strip from name parts
   *
   * @default '-_'
   */
  readonly deleteCharacters?: string;
  /**
   * Characters which will cause an error if included in a name part tested AFTER deleteCharacters
   * @todo implement me
   * @default '!@#$%^&*()~`"' maybe more??? needs thought. Should be DNS compliant, I think.
   */
  readonly illegalCharacters?: string; // Maybe should accept an RE?
  /**
   * How long can the name be?
   * @default - no limit
   */
  readonly maxLength?: number;
  /**
   * If the name exceeds maxLength, should I snip the head or the tail?
   * @default false
   */
  readonly maxLengthTruncateHead?: boolean;
  /**
   * How long can a part of the name be?
   * @default - no limit
   */
  readonly maxPartLength?: number;
  /**
   * If the part exceeds maxPartLength, should I snip the head or the tail?
   * @default false
   */
  readonly maxPartLengthTruncateHead?: boolean;
  /**
   * When using toString(), which format should be provided?
   * @default - raise an error if no default specified and toString invoked
   */
  readonly defaultFormat?: Format;
  /**
   * Include a uniquifying suffix? If so, this is the seed for that suffix.
   * @default - do not include a uniquifier
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  readonly uniqueSeed?: any;
}

export class Namer {
  readonly parts: string[];
  private _parts: string[];
  private _camel?: string;
  private _kebab?: string;
  private _pascal?: string;
  private _snake?: string;
  private _unique?: string;
  readonly props?: NamerProps;

  /**
   * Create a namer
   * @param parts an array of strings to be composed into a name.
   * @param props modify the behavior of namer.
   */
  constructor(parts: string[], props?: NamerProps) {
    this.props = props;

    const defaultedDeleteCharacters: string = props?.deleteCharacters || '-_';
    const rawDeleteCharactersRe = '[' + [...defaultedDeleteCharacters].map(escapeRegex).join('|') + ']';
    const deleteCharactersRe = new RegExp(rawDeleteCharactersRe, 'gi');

    if (props?.illegalCharacters) {
      throw new Error('not implemented');
    }

    if (props?.uniqueSeed) {
      const shasum = crypto.createHash('sha1');
      if (props.uniqueSeed instanceof String) {
        shasum.update(props.uniqueSeed as string);
      } else {
        // everthing is an object in typescript
        shasum.update(JSON.stringify(props.uniqueSeed));
      }
      this._unique = shasum.digest('hex').substring(0, 7);
    }

    this._parts = parts;
    this._parts = this.splitParts();
    // Ignore empty parts
    this.parts = this._parts
      .filter((element: string, _index: number, _array: string[]): boolean => {
        return element != '';
      })
      // Make sure the parts are lower cased
      // Remove illegal characters from parts: - _
      // Enforce maxPartLength
      .map((element: string, _index: number, _array: string[]): string => {
        const r = element.toLowerCase().replace(deleteCharactersRe, '');
        if (!props?.maxPartLength) {
          // no max
          return r;
        }
        if (r.length <= props.maxPartLength) {
          // already short enough
          return r;
        }
        if (props.maxPartLengthTruncateHead) {
          // trim the head
          return r.slice(r.length - props.maxPartLength);
        } else {
          // trim the tail
          return r.slice(0, props.maxPartLength);
        }
      });
  }
  private splitParts(): string[] {
    // Split kebab and snake
    this._parts.forEach((part, index) => {
      const splitParts = part.split(/[-_ ]/);
      this._parts.splice(index, 1, ...splitParts);
    });
    // Split camel or pascal
    // TODO: need to dry this out.
    this._parts.forEach((part, index) => {
      if (part.toUpperCase() == part) {
        return;
      }
      const splitParts = part.split(/(?=[A-Z])/);
      this._parts.splice(index, 1, ...splitParts);
    });
    this._parts.forEach((part, index) => {
      if (part.toUpperCase() == part) {
        return;
      }
      const splitParts = part.split(/(?=[A-Z])/);
      this._parts.splice(index, 1, ...splitParts);
    });
    return this._parts;
  }

  get partsWithUnique(): string[] {
    return this._unique ? [...this.parts, this._unique] : this.parts;
  }

  enforceMaxLength(raw: string): string {
    if (this.props?.maxLength === undefined) {
      return raw;
    }
    if (raw.length <= this.props.maxLength) {
      return raw;
    }
    if (this.props?.maxLengthTruncateHead) {
      return raw.slice(raw.length - this.props.maxLength);
    }
    if (this._unique) {
      return raw.slice(0, this.props.maxLength - this._unique.length) + this._unique;
    }
    return raw.slice(0, this.props.maxLength);
  }

  /** camelCase */
  get camel(): string {
    if (!this._camel) {
      this._camel = this.enforceMaxLength(
        this.partsWithUnique
          .map((value: string, index: number, _array: string[]) => {
            return index == 0 ? value : value.charAt(0).toUpperCase() + value.slice(1);
          })
          .reduce((previousValue: string, currentValue: string, _currentIndex: number, _array: string[]): string => {
            return `${previousValue}${currentValue}`;
          }),
      );
    }
    return this._camel;
  }

  /** kebab-case */
  get kebab(): string {
    if (!this._kebab) {
      this._kebab = this.enforceMaxLength(
        this.partsWithUnique.reduce(
          (previousValue: string, currentValue: string, _currentIndex: number, _array: string[]): string => {
            return `${previousValue}-${currentValue}`;
          },
        ),
      );
    }
    return this._kebab;
  }

  /** PascalCase */
  get pascal(): string {
    if (!this._pascal) {
      this._pascal = this.enforceMaxLength(
        this.partsWithUnique
          .map((value: string, _index: number, _array: string[]) => {
            return value.charAt(0).toUpperCase() + value.slice(1);
          })
          .reduce((previousValue: string, currentValue: string, _currentIndex: number, _array: string[]): string => {
            return `${previousValue}${currentValue}`;
          }),
      );
    }
    return this._pascal;
  }

  /** snake_case */
  get snake(): string {
    if (!this._snake) {
      this._snake = this.enforceMaxLength(
        this.partsWithUnique.reduce(
          (previousValue: string, currentValue: string, _currentIndex: number, _array: string[]): string => {
            return `${previousValue}_${currentValue}`;
          },
        ),
      );
    }
    return this._snake;
  }

  /**
   * Create a new Namer with the added prefix
   * @param prefix the prefix to add
   * @param props properties to over-ride the parent props
   */
  public addPrefix(prefix: Namer | string[], props?: NamerProps): Namer {
    const p = prefix instanceof Namer ? prefix.parts : prefix;
    return new Namer([...p, ...this.parts], { ...this.props, ...props });
  }

  /**
   * Create a new Namer with the added suffix
   * @param suffix the suffix to add
   * @param props properties to over-ride the parent props
   */
  public addSuffix(suffix: Namer | string[], props?: NamerProps): Namer {
    const s = suffix instanceof Namer ? suffix.parts : suffix;
    return new Namer([...this.parts, ...s], { ...this.props, ...props });
  }

  /**
   * Create a new Namer with a unique suffix
   * @param uniqueItem: any value to use as the seed for generating a unique hash
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public unique(uniqueItem: any): Namer {
    return this.addSuffix([], { uniqueSeed: uniqueItem });
  }
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
  /* eslint-enable @typescript-eslint/no-explicit-any */

  public toString(): string {
    switch (this.props?.defaultFormat) {
      case Format.CAMEL:
        return this.camel;
      case Format.KEBAB:
        return this.kebab;
      case Format.PASCAL:
        return this.pascal;
      case Format.SNAKE:
        return this.snake;
      default:
        throw new Error('default stringer not defined');
    }
  }
}

// https://stackoverflow.com/a/3561711
function escapeRegex(s: string) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
