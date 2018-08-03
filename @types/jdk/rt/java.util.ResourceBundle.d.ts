declare namespace java {
    namespace util {
        abstract class ResourceBundle {
            protected parent: java.util.ResourceBundle
            public getBaseBundleName(): string
            public constructor()
            public getString(arg0: java.lang.String | string): string
            public getStringArray(arg0: java.lang.String | string): java.lang.String[]
            public getObject(arg0: java.lang.String | string): java.lang.Object
            public getLocale(): java.util.Locale
            protected setParent(arg0: java.util.ResourceBundle): void
            public static getBundle(arg0: java.lang.String | string): java.util.ResourceBundle
            public static getBundle(arg0: java.lang.String | string, arg1: java.util.ResourceBundle$Control): java.util.ResourceBundle
            public static getBundle(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.ResourceBundle
            public static getBundle(arg0: java.lang.String | string, arg1: java.util.Locale, arg2: java.util.ResourceBundle$Control): java.util.ResourceBundle
            public static getBundle(arg0: java.lang.String | string, arg1: java.util.Locale, arg2: java.lang.ClassLoader): java.util.ResourceBundle
            public static getBundle(arg0: java.lang.String | string, arg1: java.util.Locale, arg2: java.lang.ClassLoader, arg3: java.util.ResourceBundle$Control): java.util.ResourceBundle
            public static clearCache(): void
            public static clearCache(arg0: java.lang.ClassLoader): void
            protected abstract handleGetObject(arg0: java.lang.String | string): java.lang.Object
            public abstract getKeys(): java.util.Enumeration<java.lang.String>
            public containsKey(arg0: java.lang.String | string): boolean
            public keySet(): java.util.Set<java.lang.String>
            protected handleKeySet(): java.util.Set<java.lang.String>
            public static class: java.lang.Class<any>
        }
    }
}