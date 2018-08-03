declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        class NamespaceSupport {
                            public static readonly XMLNS: string
                            public constructor()
                            public constructor(arg0: com.sun.xml.internal.ws.util.NamespaceSupport)
                            public reset(): void
                            public pushContext(): void
                            public popContext(): void
                            public slideContextUp(): void
                            public slideContextDown(): void
                            public declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                            public processName(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: boolean): java.lang.String[]
                            public getURI(arg0: java.lang.String | string): string
                            public getPrefixes(): java.lang.Iterable<java.lang.String>
                            public getPrefix(arg0: java.lang.String | string): string
                            public getPrefixes(arg0: java.lang.String | string): java.util.Iterator
                            public getDeclaredPrefixes(): java.lang.Iterable<java.lang.String>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}