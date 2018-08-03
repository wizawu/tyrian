declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
                                abstract class TransducedAccessor<BeanT> {
                                    public constructor()
                                    public useNamespace(): boolean
                                    public declareNamespace(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                    public abstract print(arg0: BeanT): java.lang.CharSequence
                                    public abstract parse(arg0: BeanT, arg1: java.lang.CharSequence): void
                                    public abstract hasValue(arg0: BeanT): boolean
                                    public static get<T>(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElementRef): com.sun.xml.internal.bind.v2.runtime.reflect.TransducedAccessor<T>
                                    public abstract writeLeafElement<T>(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: BeanT, arg3: java.lang.String | string): void
                                    public abstract writeText<T>(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: BeanT, arg2: java.lang.String | string): void
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