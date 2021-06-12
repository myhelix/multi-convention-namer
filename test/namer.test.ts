import * as CuT from '../src/namer';

const exampleParts = ['one', '', 'Two', 'THREE'];
const n = new CuT.Namer(exampleParts);
const ab = new CuT.Namer(['a', 'b']);

test('camel', () => {
  expect(n.camel).toEqual('oneTwoThree');
});

test('kebab', () => {
  expect(n.kebab).toEqual('one-two-three');
});

test('pascal', () => {
  expect(n.pascal).toEqual('OneTwoThree');
});

test('snake', () => {
  expect(n.snake).toEqual('one_two_three');
});

test('use deleteCharacters', () => {
  const a = new CuT.Namer(exampleParts, { deleteCharacters: 'e' });
  expect(a.camel).toEqual('onTwoThr');
});

test('enforce maxLength', () => {
  const a = new CuT.Namer(exampleParts, { maxLength: 6 });
  expect(a.kebab).toEqual('one-tw');
});

test('enforce maxLength, maxLengthTruncateHead', () => {
  const a = new CuT.Namer(exampleParts, { maxLength: 6, maxLengthTruncateHead: true });
  expect(a.kebab).toEqual('-three');
});

test('enforce maxPartLength', () => {
  const a = new CuT.Namer(exampleParts, { maxPartLength: 3 });
  expect(a.kebab).toEqual('one-two-thr');
});

test('enforce maxPartLength, maxPartLengthTruncateHead', () => {
  const a = new CuT.Namer(exampleParts, { maxPartLength: 3, maxPartLengthTruncateHead: true });
  expect(a.kebab).toEqual('one-two-ree');
});

test('prefix', () => {
  expect(n.addPrefix(['a', 'b']).kebab).toEqual('a-b-one-two-three');
});

test('suffix', () => {
  expect(n.addSuffix(['a', 'b']).kebab).toEqual('one-two-three-a-b');
});

test('prefix override props', () => {
  expect(n.addPrefix(['a', 'b'], { maxPartLength: 3 }).kebab).toEqual('a-b-one-two-thr');
});

test('suffix override props', () => {
  expect(n.addSuffix(['a', 'b'], { maxLength: 5, maxLengthTruncateHead: true }).kebab).toEqual('e-a-b');
});

test('namer prefix', () => {
  expect(n.addPrefix(ab).kebab).toEqual('a-b-one-two-three');
});

test('namer suffix', () => {
  expect(n.addSuffix(ab).kebab).toEqual('one-two-three-a-b');
});

test('unique with string', () => {
  expect(new CuT.Namer(exampleParts, { uniqueSeed: 'a unique string' }).kebab).toEqual('one-two-three-00ac8be');
});

test('unique with object', () => {
  expect(n.addSuffix([], { uniqueSeed: { a: 'b', c: true } }).pascal).toEqual('OneTwoThree317ac25');
});

test('unique with int', () => {
  expect(n.addPrefix([], { uniqueSeed: 100 }).pascal).toEqual('OneTwoThree310b86e');
});

test('different values for different objects', () => {
  const a = n.unique({ a: 'b', c: true }).pascal;
  const b = n.unique({ c: 'b', d: false }).pascal;
  expect(b).not.toEqual(a);
});

test('unique with maxLength', () => {
  const a = new CuT.Namer(exampleParts, { uniqueSeed: 'a unique string', maxLength: 16 });
  expect(a.kebab).toEqual('one-two-t00ac8be');
});

test('test default toString', () => {
  const defaultKebab = ab.addSuffix([], { defaultFormat: CuT.Format.KEBAB });
  expect(`${defaultKebab}`).toEqual('a-b');
});

test('namer with defaultFormat', () => {
  expect(() => {
    `${n}`;
  }).toThrow();
});

test('namer splits a mixed case string', () => {
  const s = new CuT.Namer(['this_is-a_MixedCase_so-manyCasesHere']);
  expect(s.parts).toEqual(['this', 'is', 'a', 'mixed', 'case', 'so', 'many', 'cases', 'here']);
});
test('namer splits a snake string', () => {
  const s = new CuT.Namer(['this_is_snake_case']);
  expect(s.parts).toEqual(['this', 'is', 'snake', 'case']);
});
test('namer splits a kebab string', () => {
  const s = new CuT.Namer(['this-is-kebab-case']);
  expect(s.parts).toEqual(['this', 'is', 'kebab', 'case']);
});
test('namer splits a camelCase string', () => {
  const s = new CuT.Namer(['thisIsCamelCase']);
  expect(s.parts).toEqual(['this', 'is', 'camel', 'case']);
});
test('namer splits a PascalCase string', () => {
  const s = new CuT.Namer(['ThisIsPascalCase']);
  expect(s.parts).toEqual(['this', 'is', 'pascal', 'case']);
});
test('namer splits a string with spaces', () => {
  const s = new CuT.Namer(['ThisIsAPascal CaseStringWithASpace']);
  expect(s.parts).toEqual(['this', 'is', 'a', 'pascal', 'case', 'string', 'with', 'a', 'space']);
});
