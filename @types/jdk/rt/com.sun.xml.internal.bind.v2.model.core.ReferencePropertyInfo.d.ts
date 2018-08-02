declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface ReferencePropertyInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C> {
                                    getElements(): java.util.Set<com.sun.xml.internal.bind.v2.model.core.Element<T, C>>
                                    ref(): java.util.Collection<com.sun.xml.internal.bind.v2.model.core.TypeInfo<T, C>>
                                    getXmlName(): javax.xml.namespace.QName
                                    isCollectionNillable(): boolean
                                    isCollectionRequired(): boolean
                                    isMixed(): boolean
                                    getWildcard(): com.sun.xml.internal.bind.v2.model.core.WildcardMode
                                    getDOMHandler(): C
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