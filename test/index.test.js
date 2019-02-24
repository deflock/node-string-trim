'use strict';

const fn = require('../lib/index');

it('trims string', () => {
    expect(fn.trimStringLeft('//str', '/')).toBe('str');
    expect(fn.trimStringRight('str*****', '**')).toBe('str*');
    expect(fn.trimString('***str***', '**')).toBe('*str*');
    expect(fn.trimString('***', '*')).toBe('');
});

it('trims chars', () => {
    expect(fn.trimChars('/\\/str\\/\\', '/\\')).toBe('str');
    expect(fn.trimCharsLeft('/\\//\\\\//\\', ['\\', '/'])).toBe('');
    expect(fn.trimCharsRight('/\\//\\\\//\\', ['\\', '/'])).toBe('');
});
