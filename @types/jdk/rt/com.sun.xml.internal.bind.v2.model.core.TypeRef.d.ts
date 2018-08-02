declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface TypeRef<T, C> extends com.sun.xml.internal.bind.v2.model.core.NonElementRef<T, C> {
                                    getTagName(): javax.xml.namespace.QName
                                    isNillable(): boolean
                                    getDefaultValue(): string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}