declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace streaming {
                        interface Attributes {
                            getLength(): int
                            isNamespaceDeclaration(arg0: int): boolean
                            getName(arg0: int): javax.xml.namespace.QName
                            getURI(arg0: int): string
                            getLocalName(arg0: int): string
                            getPrefix(arg0: int): string
                            getValue(arg0: int): string
                            getIndex(arg0: javax.xml.namespace.QName): int
                            getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                            getIndex(arg0: java.lang.String | string): int
                            getValue(arg0: javax.xml.namespace.QName): string
                            getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            getValue(arg0: java.lang.String | string): string
                        }
                    }
                }
            }
        }
    }
}