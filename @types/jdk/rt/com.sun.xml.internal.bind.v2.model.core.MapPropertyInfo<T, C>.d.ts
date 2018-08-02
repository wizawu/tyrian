declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
interface MapPropertyInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C> {
    getXmlName(): javax.xml.namespace.QName
    isCollectionNillable(): boolean
    getKeyType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
    getValueType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
}

                            }
                        }
                    }
                }
            }
        }
    }
}