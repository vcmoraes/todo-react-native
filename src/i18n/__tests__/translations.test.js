import fs from 'fs';
import path from 'path';

const getAllKeys = (obj, prefix = '') => {
  let keys = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key], prefix ? `${prefix}.${key}` : key));
    } else {
      keys.push(prefix ? `${prefix}.${key}` : key);
    }
  }
  return keys;
};

const getValueByPath = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

const getAvailableLanguages = () => {
  const localesDir = path.join(__dirname, '../../locales');
  return fs.readdirSync(localesDir)
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      code: file.replace('.json', ''),
      translations: JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'))
    }));
};

describe('i18n translations', () => {
  const languages = getAvailableLanguages();
  const baseLanguage = languages.find(lang => lang.code === 'en') || languages[0];
  
  if (!baseLanguage) {
    throw new Error('No base language found. Expected at least one language file.');
  }

  const baseKeys = getAllKeys(baseLanguage.translations);

  it('GIVEN all languages WHEN comparing with base language THEN should have same number of keys', () => {
    languages.forEach(language => {
      const languageKeys = getAllKeys(language.translations);
      expect(languageKeys.length).toBe(baseKeys.length);
    });
  });

  it('GIVEN base language WHEN checking all other languages THEN all base keys should exist in other languages', () => {
    languages.forEach(language => {
      if (language.code === baseLanguage.code) return;
      
      const missingKeys = baseKeys.filter(key => !getValueByPath(language.translations, key));
      expect(missingKeys).toEqual([]);
    });
  });

  it('GIVEN all languages WHEN checking base language THEN all language keys should exist in base language', () => {
    languages.forEach(language => {
      if (language.code === baseLanguage.code) return;
      
      const languageKeys = getAllKeys(language.translations);
      const missingKeys = languageKeys.filter(key => !getValueByPath(baseLanguage.translations, key));
      expect(missingKeys).toEqual([]);
    });
  });

  it('GIVEN translation keys WHEN checking structure THEN should have consistent nested structure', () => {
    const getStructure = (obj) => {
      const structure = {};
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          structure[key] = getStructure(obj[key]);
        } else {
          structure[key] = 'string';
        }
      }
      return structure;
    };
    
    const baseStructure = getStructure(baseLanguage.translations);
    
    languages.forEach(language => {
      const languageStructure = getStructure(language.translations);
      expect(languageStructure).toEqual(baseStructure);
    });
  });

  it('GIVEN translation values WHEN checking content THEN should not have empty values', () => {
    languages.forEach(language => {
      const languageKeys = getAllKeys(language.translations);
      const emptyValues = languageKeys.filter(key => {
        const value = getValueByPath(language.translations, key);
        return !value || value.trim() === '';
      });
      expect(emptyValues).toEqual([]);
    });
  });

  it('GIVEN translation keys WHEN checking accessibility keys THEN should have proper accessibility labels', () => {
    const accessibilityKeys = baseKeys.filter(key => key.startsWith('accessibility.'));
    
    accessibilityKeys.forEach(key => {
      languages.forEach(language => {
        const value = getValueByPath(language.translations, key);
        expect(value).toBeTruthy();
        expect(typeof value).toBe('string');
      });
    });
  });

  it('GIVEN all languages WHEN checking language codes THEN should have valid language codes', () => {
    languages.forEach(language => {
      expect(language.code).toMatch(/^[a-z]{2}$/);
      expect(typeof language.translations).toBe('object');
      expect(language.translations).not.toBeNull();
    });
  });
});
