declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface AttributePropertyInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C> , com.sun.xml.internal.bind.v2.model.core.NonElementRef<T, C> {
                                    getTarget(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    isRequired(): boolean
                                    getXmlName(): javax.xml.namespace.QName
                                    getAdapter(): com.sun.xml.internal.bind.v2.model.core.Adapter<T, C>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}