declare namespace sun {
    namespace util {
        namespace locale {
class LanguageTag {
    public static SEP: string
    public static PRIVATEUSE: string
    public static UNDETERMINED: string
    public static PRIVUSE_VARIANT_PREFIX: string
    public static parse(arg0: java.lang.String | string, arg1: sun.util.locale.ParseStatus): sun.util.locale.LanguageTag
    public static parseLocale(arg0: sun.util.locale.BaseLocale, arg1: sun.util.locale.LocaleExtensions): sun.util.locale.LanguageTag
    public getLanguage(): string
    public getExtlangs(): java.util.List<java.lang.String>
    public getScript(): string
    public getRegion(): string
    public getVariants(): java.util.List<java.lang.String>
    public getExtensions(): java.util.List<java.lang.String>
    public getPrivateuse(): string
    public static isLanguage(arg0: java.lang.String | string): boolean
    public static isExtlang(arg0: java.lang.String | string): boolean
    public static isScript(arg0: java.lang.String | string): boolean
    public static isRegion(arg0: java.lang.String | string): boolean
    public static isVariant(arg0: java.lang.String | string): boolean
    public static isExtensionSingleton(arg0: java.lang.String | string): boolean
    public static isExtensionSingletonChar(arg0: char): boolean
    public static isExtensionSubtag(arg0: java.lang.String | string): boolean
    public static isPrivateusePrefix(arg0: java.lang.String | string): boolean
    public static isPrivateusePrefixChar(arg0: char): boolean
    public static isPrivateuseSubtag(arg0: java.lang.String | string): boolean
    public static canonicalizeLanguage(arg0: java.lang.String | string): string
    public static canonicalizeExtlang(arg0: java.lang.String | string): string
    public static canonicalizeScript(arg0: java.lang.String | string): string
    public static canonicalizeRegion(arg0: java.lang.String | string): string
    public static canonicalizeVariant(arg0: java.lang.String | string): string
    public static canonicalizeExtension(arg0: java.lang.String | string): string
    public static canonicalizeExtensionSingleton(arg0: java.lang.String | string): string
    public static canonicalizeExtensionSubtag(arg0: java.lang.String | string): string
    public static canonicalizePrivateuse(arg0: java.lang.String | string): string
    public static canonicalizePrivateuseSubtag(arg0: java.lang.String | string): string
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}