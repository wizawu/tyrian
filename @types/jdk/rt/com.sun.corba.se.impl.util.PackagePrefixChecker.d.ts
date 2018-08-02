declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace util {
                        class PackagePrefixChecker {
                            public constructor()
                            public static packagePrefix(): string
                            public static correctPackageName(arg0: java.lang.String | string): string
                            public static isOffendingPackage(arg0: java.lang.String | string): boolean
                            public static hasOffendingPrefix(arg0: java.lang.String | string): boolean
                            public static hasBeenPrefixed(arg0: java.lang.String | string): boolean
                            public static withoutPackagePrefix(arg0: java.lang.String | string): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}