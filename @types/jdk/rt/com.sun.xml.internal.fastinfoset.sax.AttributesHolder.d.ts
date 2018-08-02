declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace sax {
                        class AttributesHolder implements com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmAttributes {
                            public constructor()
                            public constructor(arg0: java.util.Map)
                            public getLength(): int
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
                            public getAlgorithmURI(arg0: int): string
                            public getAlgorithmIndex(arg0: int): int
                            public getAlgorithmData(arg0: int): java.lang.Object
                            public getAlpababet(arg0: int): string
                            public getToIndex(arg0: int): boolean
                            public addAttribute(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: java.lang.String | string): void
                            public addAttributeWithAlgorithmData(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Object): void
                            public getQualifiedName(arg0: int): com.sun.xml.internal.fastinfoset.QualifiedName
                            public getPrefix(arg0: int): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}