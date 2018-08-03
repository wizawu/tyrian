declare namespace sun {
    namespace util {
        namespace locale {
            class LocaleExtensions {
                public static readonly CALENDAR_JAPANESE: sun.util.locale.LocaleExtensions
                public static readonly NUMBER_THAI: sun.util.locale.LocaleExtensions
                public getKeys(): java.util.Set<java.lang.Character>
                public getExtension(arg0: java.lang.Character): sun.util.locale.Extension
                public getExtensionValue(arg0: java.lang.Character): string
                public getUnicodeLocaleAttributes(): java.util.Set<java.lang.String>
                public getUnicodeLocaleKeys(): java.util.Set<java.lang.String>
                public getUnicodeLocaleType(arg0: java.lang.String | string): string
                public isEmpty(): boolean
                public static isValidKey(arg0: char): boolean
                public static isValidUnicodeLocaleKey(arg0: java.lang.String | string): boolean
                public toString(): string
                public getID(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}