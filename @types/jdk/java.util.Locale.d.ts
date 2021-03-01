declare namespace java {
  namespace util {

    class Locale implements java.lang.Cloneable, java.io.Serializable {

      public static readonly ENGLISH: java.util.Locale
      public static readonly FRENCH: java.util.Locale
      public static readonly GERMAN: java.util.Locale
      public static readonly ITALIAN: java.util.Locale
      public static readonly JAPANESE: java.util.Locale
      public static readonly KOREAN: java.util.Locale
      public static readonly CHINESE: java.util.Locale
      public static readonly SIMPLIFIED_CHINESE: java.util.Locale
      public static readonly TRADITIONAL_CHINESE: java.util.Locale
      public static readonly FRANCE: java.util.Locale
      public static readonly GERMANY: java.util.Locale
      public static readonly ITALY: java.util.Locale
      public static readonly JAPAN: java.util.Locale
      public static readonly KOREA: java.util.Locale
      public static readonly CHINA: java.util.Locale
      public static readonly PRC: java.util.Locale
      public static readonly TAIWAN: java.util.Locale
      public static readonly UK: java.util.Locale
      public static readonly US: java.util.Locale
      public static readonly CANADA: java.util.Locale
      public static readonly CANADA_FRENCH: java.util.Locale
      public static readonly ROOT: java.util.Locale
      public static readonly PRIVATE_USE_EXTENSION: char
      public static readonly UNICODE_LOCALE_EXTENSION: char
      static readonly serialVersionUID: long
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String)
      static getInstance(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): java.util.Locale
      static getInstance(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: sun.util.locale.LocaleExtensions): java.util.Locale
      static getInstance(arg0: sun.util.locale.BaseLocale, arg1: sun.util.locale.LocaleExtensions): java.util.Locale
      public static getDefault(): java.util.Locale
      public static getDefault(arg0: java.util.Locale$Category): java.util.Locale
      public static setDefault(arg0: java.util.Locale): void
      public static setDefault(arg0: java.util.Locale$Category, arg1: java.util.Locale): void
      public static getAvailableLocales(): java.util.Locale[]
      public static getISOCountries(): java.lang.String[]
      public static getISOCountries(arg0: java.util.Locale$IsoCountryCode): java.util.Set<java.lang.String>
      public static getISOLanguages(): java.lang.String[]
      public getLanguage(): java.lang.String
      public getScript(): java.lang.String
      public getCountry(): java.lang.String
      public getVariant(): java.lang.String
      public hasExtensions(): boolean
      public stripExtensions(): java.util.Locale
      public getExtension(arg0: char): java.lang.String
      public getExtensionKeys(): java.util.Set<java.lang.Character>
      public getUnicodeLocaleAttributes(): java.util.Set<java.lang.String>
      public getUnicodeLocaleType(arg0: java.lang.String): java.lang.String
      public getUnicodeLocaleKeys(): java.util.Set<java.lang.String>
      getBaseLocale(): sun.util.locale.BaseLocale
      getLocaleExtensions(): sun.util.locale.LocaleExtensions
      public readonly toString(): java.lang.String
      public toLanguageTag(): java.lang.String
      public static forLanguageTag(arg0: java.lang.String): java.util.Locale
      public getISO3Language(): java.lang.String
      public getISO3Country(): java.lang.String
      public readonly getDisplayLanguage(): java.lang.String
      public getDisplayLanguage(arg0: java.util.Locale): java.lang.String
      public getDisplayScript(): java.lang.String
      public getDisplayScript(arg0: java.util.Locale): java.lang.String
      public readonly getDisplayCountry(): java.lang.String
      public getDisplayCountry(arg0: java.util.Locale): java.lang.String
      public readonly getDisplayVariant(): java.lang.String
      public getDisplayVariant(arg0: java.util.Locale): java.lang.String
      public readonly getDisplayName(): java.lang.String
      public getDisplayName(arg0: java.util.Locale): java.lang.String
      public clone(): java.lang.Object
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public static filter(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>, arg2: java.util.Locale$FilteringMode): java.util.List<java.util.Locale>
      public static filter(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>): java.util.List<java.util.Locale>
      public static filterTags(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>, arg2: java.util.Locale$FilteringMode): java.util.List<java.lang.String>
      public static filterTags(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>): java.util.List<java.lang.String>
      public static lookup(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>): java.util.Locale
      public static lookupTag(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>): java.lang.String
    }

  }
}
