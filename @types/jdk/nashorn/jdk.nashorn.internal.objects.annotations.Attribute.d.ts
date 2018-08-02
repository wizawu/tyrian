declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
                    interface Attribute {
                        NOT_WRITABLE: int
                        NOT_ENUMERABLE: int
                        NOT_CONFIGURABLE: int
                        CONSTANT: int
                        NON_ENUMERABLE_CONSTANT: int
                        DEFAULT_ATTRIBUTES: int
                    }
                }
            }
        }
    }
}