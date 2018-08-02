declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface ElementPropertyInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C> {
                                    getTypes(): java.util.List<com.sun.xml.internal.bind.v2.model.core.TypeRef<T, C>>
                                    getXmlName(): javax.xml.namespace.QName
                                    isCollectionRequired(): boolean
                                    isCollectionNillable(): boolean
                                    isValueList(): boolean
                                    isRequired(): boolean
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