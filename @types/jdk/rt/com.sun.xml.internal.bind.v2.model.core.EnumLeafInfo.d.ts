declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface EnumLeafInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.LeafInfo<T, C> {
                                    getClazz(): C
                                    getBaseType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    getConstants(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.core.EnumConstant>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}