declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    class NamespaceSupport {
                        public static XMLNS: string
                        public static NSDECL: string
                        public constructor()
                        public reset(): void
                        public pushContext(): void
                        public popContext(): void
                        public declarePrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                        public processName(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: boolean): java.lang.String[]
                        public getURI(arg0: java.lang.String | string): string
                        public getPrefixes(): java.util.Enumeration
                        public getPrefix(arg0: java.lang.String | string): string
                        public getPrefixes(arg0: java.lang.String | string): java.util.Enumeration
                        public getDeclaredPrefixes(): java.util.Enumeration
                        public setNamespaceDeclUris(arg0: boolean): void
                        public isNamespaceDeclUris(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}