declare namespace java {
    namespace util {
        class Locale implements java.lang.Cloneable , java.io.Serializable {
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
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string)
            public static getDefault(): java.util.Locale
            public static getDefault(arg0: java.util.Locale$Category): java.util.Locale
            public static setDefault(arg0: java.util.Locale): void
            public static setDefault(arg0: java.util.Locale$Category, arg1: java.util.Locale): void
            public static getAvailableLocales(): java.util.Locale[]
            public static getISOCountries(): java.lang.String[]
            public static getISOLanguages(): java.lang.String[]
            public getLanguage(): string
            public getScript(): string
            public getCountry(): string
            public getVariant(): string
            public hasExtensions(): boolean
            public stripExtensions(): java.util.Locale
            public getExtension(arg0: char): string
            public getExtensionKeys(): java.util.Set<java.lang.Character>
            public getUnicodeLocaleAttributes(): java.util.Set<java.lang.String>
            public getUnicodeLocaleType(arg0: java.lang.String | string): string
            public getUnicodeLocaleKeys(): java.util.Set<java.lang.String>
            public toString(): string
            public toLanguageTag(): string
            public static forLanguageTag(arg0: java.lang.String | string): java.util.Locale
            public getISO3Language(): string
            public getISO3Country(): string
            public getDisplayLanguage(): string
            public getDisplayLanguage(arg0: java.util.Locale): string
            public getDisplayScript(): string
            public getDisplayScript(arg0: java.util.Locale): string
            public getDisplayCountry(): string
            public getDisplayCountry(arg0: java.util.Locale): string
            public getDisplayVariant(): string
            public getDisplayVariant(arg0: java.util.Locale): string
            public getDisplayName(): string
            public getDisplayName(arg0: java.util.Locale): string
            public clone(): java.lang.Object
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static filter(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>, arg2: java.util.Locale$FilteringMode): java.util.List<java.util.Locale>
            public static filter(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>): java.util.List<java.util.Locale>
            public static filterTags(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>, arg2: java.util.Locale$FilteringMode): java.util.List<java.lang.String>
            public static filterTags(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>): java.util.List<java.lang.String>
            public static lookup(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.util.Locale>): java.util.Locale
            public static lookupTag(arg0: java.util.List<java.util.Locale$LanguageRange>, arg1: java.util.Collection<java.lang.String>): string
            public static class: java.lang.Class<any>
        }
    }
}