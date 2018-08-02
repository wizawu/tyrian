declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        class AttributesHolder implements org.xml.sax.Attributes {
                            public constructor()
                            public getLength(): int
                            public getPrefix(arg0: int): string
                            public getLocalName(arg0: int): string
                            public getQName(arg0: int): string
                            public getType(arg0: int): string
                            public getURI(arg0: int): string
                            public getValue(arg0: int): string
                            public getIndex(arg0: java.lang.String | string): int
                            public getType(arg0: java.lang.String | string): string
                            public getValue(arg0: java.lang.String | string): string
                            public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                            public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            public clear(): void
                            public addAttributeWithQName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                            public addAttributeWithPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}