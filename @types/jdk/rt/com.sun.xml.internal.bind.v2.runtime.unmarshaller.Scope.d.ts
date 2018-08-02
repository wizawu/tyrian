declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class Scope<BeanT, PropT, ItemT, PackT> {
                                    public context: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    public hasStarted(): boolean
                                    public reset(): void
                                    public finish(): void
                                    public add(arg0: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Lister<BeanT, PropT, ItemT, PackT>, arg2: ItemT): void
                                    public start(arg0: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Lister<BeanT, PropT, ItemT, PackT>): void
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