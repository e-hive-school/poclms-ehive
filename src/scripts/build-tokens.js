import StyleDictionary from 'style-dictionary';
import pkg from 'style-dictionary/lib/common/formatHelpers/index.js';
import Color from 'tinycolor2';
const { minifyDictionary } = pkg;

const sanitizeSize = (size) => {
  // eslint-disable-next-line eqeqeq
  return size.split('.')[1] == 0 ? `${size.split('.')[0]}rem` : `${size}rem`;
};

const sanitizeDictionary = (dictionary) => {
  delete dictionary.tokens['text-preset'];
  delete dictionary.tokens['type'];

  // This assignment is necessary for the maintenance of the tokens.ts v1
  Object.assign(dictionary.tokens, dictionary.tokens.boxShadow);

  return dictionary.tokens;
};

// Transform Color
StyleDictionary.registerTransform({
  name: 'color/css',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'color';
  },
  transformer: function (prop) {
    let color = Color(prop.value);
    if (color.getAlpha() === 1) {
      return color.toHexString();
    } else {
      return color.toRgbString();
    }
  },
});

// Transform BoxShadow
StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    const shadows = token.value;

    const result = shadows.map((shadow) => {
      let hexColor = shadow.color.split(/[#,]/)[1];
      let rgbColor = Color(hexColor);

      let newRgba = shadow.color.replace(
        `#${hexColor}`,
        `${rgbColor._r}, ${rgbColor._g}, ${rgbColor._b}`
      );

      return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${newRgba}`;
    });

    return result.join(',');
  },
});

// Transform Pixel to Rem
StyleDictionary.registerTransform({
  name: 'size/rem',
  type: 'value',
  matcher: function (token) {
    return (
      token.attributes.category === 'font' ||
      token.attributes.category === 'spacing'
    );
  },
  transformer: function (token) {
    const value =
      // eslint-disable-next-line eqeqeq
      token.value == 0
        ? token.value
        : sanitizeSize((token.value * 0.1).toFixed(1));
    return value;
  },
});

// Transform Font Weight
StyleDictionary.registerTransform({
  name: 'font/fontWeight',
  type: 'value',
  matcher: function (token) {
    return token.attributes.category === 'font';
  },
  transformer: function (token) {
    return {
      Bold: '700',
      SemiBold: '600',
      Medium: '500',
      Regular: '400',
      Light: '300',
    }[token.value];
  },
});

// Generate TS file
StyleDictionary.registerFormat({
  name: 'tsFormat',
  formatter: function ({ dictionary }) {
    const cleanedDictionary = sanitizeDictionary(dictionary);

    return `/**
 * Do not edit directly
 * Generated on ${Date()}
 */

export default ${JSON.stringify(
      minifyDictionary(cleanedDictionary),
      null,
      2
    )} as const`;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ['./fundations.json'],
  platforms: {
    web: {
      basePxFontSize: 16,
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hex',
        'color/css',
        'size/rem',
        'font/fontWeight',
        'shadow/css',
      ],
      transformGroup: 'css',
      prefix: 'token',
      buildPath: '../styles/tokens/css/',
      files: [
        {
          destination: '_shadows.css',
          format: 'css/variables',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: '_typography.css',
          format: 'css/variables',
          filter: {
            type: 'font',
          },
        },
        {
          destination: '_colors.css',
          format: 'css/variables',
          filter: {
            type: 'color',
          },
        },
        {
          destination: '_spacers.css',
          format: 'css/variables',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: '_borders.css',
          format: 'css/variables',
          filter: {
            type: 'borderRadius',
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hex',
        'color/css',
        'size/rem',
        'font/fontWeight',
        'shadow/css',
      ],
      buildPath: '../styles/tokens/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat',
        },
        {
          destination: 'tokens.ts',
          format: 'tsFormat',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'tokens.d.ts',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hex',
        'size/rem',
        'font/fontWeight',
        'shadow/css',
      ],
      buildPath: 'styles/tokens/js/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

StyleDictionaryExtended.buildAllPlatforms();

console.log('done!');
