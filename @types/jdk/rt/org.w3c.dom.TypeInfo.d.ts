declare namespace org {
    namespace w3c {
        namespace dom {
            interface TypeInfo {
                DERIVATION_RESTRICTION: int
                DERIVATION_EXTENSION: int
                DERIVATION_UNION: int
                DERIVATION_LIST: int
                getTypeName(): string
                getTypeNamespace(): string
                isDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
            }
        }
    }
}