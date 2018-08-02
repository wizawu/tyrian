declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface Element<T, C> extends com.sun.xml.internal.bind.v2.model.core.TypeInfo<T, C> {
                                    getElementName(): javax.xml.namespace.QName
                                    getSubstitutionHead(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
                                    getScope(): com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}