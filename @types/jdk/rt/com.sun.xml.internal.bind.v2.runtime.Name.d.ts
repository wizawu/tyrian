declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class Name implements java.lang.Comparable<com.sun.xml.internal.bind.v2.runtime.Name> {
                                public readonly nsUri: string
                                public readonly localName: string
                                public readonly nsUriIndex: short
                                public readonly localNameIndex: short
                                public readonly qNameIndex: short
                                public readonly isAttribute: boolean
                                public toString(): string
                                public toQName(): javax.xml.namespace.QName
                                public equals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public compareTo(arg0: com.sun.xml.internal.bind.v2.runtime.Name): int
                                public compareTo(arg0: java.lang.Object): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}