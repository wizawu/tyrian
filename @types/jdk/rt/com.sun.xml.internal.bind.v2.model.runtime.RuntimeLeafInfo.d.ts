declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace runtime {
                                interface RuntimeLeafInfo extends com.sun.xml.internal.bind.v2.model.core.LeafInfo<java.lang.reflect.Type, java.lang.Class> , com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement {
                                    getTransducer<V>(): com.sun.xml.internal.bind.v2.runtime.Transducer<V>
                                    getClazz(): java.lang.Class
                                    getTypeNames(): javax.xml.namespace.QName[]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}