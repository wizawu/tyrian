declare namespace java {
    namespace util {
        class ResourceBundle$Control {
            public static readonly FORMAT_DEFAULT: java.util.List<java.lang.String>
            public static readonly FORMAT_CLASS: java.util.List<java.lang.String>
            public static readonly FORMAT_PROPERTIES: java.util.List<java.lang.String>
            public static readonly TTL_DONT_CACHE: long
            public static readonly TTL_NO_EXPIRATION_CONTROL: long
            protected constructor()
            public static getControl(arg0: java.util.List<java.lang.String>): java.util.ResourceBundle$Control
            public static getNoFallbackControl(arg0: java.util.List<java.lang.String>): java.util.ResourceBundle$Control
            public getFormats(arg0: java.lang.String | string): java.util.List<java.lang.String>
            public getCandidateLocales(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.List<java.util.Locale>
            public getFallbackLocale(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.Locale
            public newBundle(arg0: java.lang.String | string, arg1: java.util.Locale, arg2: java.lang.String | string, arg3: java.lang.ClassLoader, arg4: boolean): java.util.ResourceBundle
            public getTimeToLive(arg0: java.lang.String | string, arg1: java.util.Locale): long
            public needsReload(arg0: java.lang.String | string, arg1: java.util.Locale, arg2: java.lang.String | string, arg3: java.lang.ClassLoader, arg4: java.util.ResourceBundle, arg5: long): boolean
            public toBundleName(arg0: java.lang.String | string, arg1: java.util.Locale): string
            public toResourceName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public static class: java.lang.Class<any>
        }
    }
}