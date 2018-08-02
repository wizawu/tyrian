declare namespace sun {
    namespace util {
        namespace locale {
class UnicodeLocaleExtension extends sun.util.locale.Extension {
    public static SINGLETON: char
    public static CA_JAPANESE: sun.util.locale.UnicodeLocaleExtension
    public static NU_THAI: sun.util.locale.UnicodeLocaleExtension
    public getUnicodeLocaleAttributes(): java.util.Set<java.lang.String>
    public getUnicodeLocaleKeys(): java.util.Set<java.lang.String>
    public getUnicodeLocaleType(arg0: java.lang.String | string): string
    public static isSingletonChar(arg0: char): boolean
    public static isAttribute(arg0: java.lang.String | string): boolean
    public static isKey(arg0: java.lang.String | string): boolean
    public static isTypeSubtag(arg0: java.lang.String | string): boolean
    public toString(): string
    public getID(): string
    public getValue(): string
    public getKey(): char
    public static class: java.lang.Class<any>
}

        }
    }
}