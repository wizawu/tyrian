declare namespace sun {
    namespace util {
        namespace locale {
            class BaseLocale {
                public static readonly SEP: string
                public static createInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.util.locale.BaseLocale
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): sun.util.locale.BaseLocale
                public getLanguage(): string
                public getScript(): string
                public getRegion(): string
                public getVariant(): string
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}