declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                abstract class RuntimeBuiltinLeafInfoImpl<T> extends com.sun.xml.internal.bind.v2.model.impl.BuiltinLeafInfoImpl<java.lang.reflect.Type, java.lang.Class> implements com.sun.xml.internal.bind.v2.model.runtime.RuntimeBuiltinLeafInfo , com.sun.xml.internal.bind.v2.runtime.Transducer<T> {
                                    public static LEAVES: java.util.Map<java.lang.reflect.Type, com.sun.xml.internal.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>
                                    public static STRING: com.sun.xml.internal.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<java.lang.String>
                                    public static builtinBeanInfos: java.util.List<com.sun.xml.internal.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>
                                    public static MAP_ANYURI_TO_URI: string
                                    public getClazz(): java.lang.Class
                                    public getTransducer(): com.sun.xml.internal.bind.v2.runtime.Transducer
                                    public useNamespace(): boolean
                                    public isDefault(): boolean
                                    public declareNamespace(arg0: T, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                    public getTypeName(arg0: T): javax.xml.namespace.QName
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}