declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
abstract class Accessor<BeanT, ValueT> implements com.sun.xml.internal.bind.v2.runtime.unmarshaller.Receiver {
    public valueType: java.lang.Class<ValueT>
    public static JAXB_ELEMENT_VALUE: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<javax.xml.bind.JAXBElement, java.lang.Object>
    public getValueType(): java.lang.Class<ValueT>
    protected constructor(arg0: java.lang.Class<ValueT>)
    public optimize(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ValueT>
    public get(arg0: BeanT): ValueT
    public set(arg0: BeanT, arg1: ValueT): void
    public getUnadapted(arg0: BeanT): java.lang.Object
    public isAdapted(): boolean
    public setUnadapted(arg0: BeanT, arg1: java.lang.Object): void
    public receive(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: java.lang.Object): void
    public isValueTypeAbstractable(): boolean
    public isAbstractable(arg0: java.lang.Class): boolean
    public adapt<T>(arg0: java.lang.Class<T>, arg1: java.lang.Class<javax.xml.bind.annotation.adapters.XmlAdapter<T, ValueT>>): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, T>
    public adapt<T>(arg0: com.sun.xml.internal.bind.v2.model.core.Adapter<java.lang.reflect.Type, java.lang.Class>): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, T>
    public static getErrorInstance<A, B>(): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<A, B>
    public static class: java.lang.Class<any>
}

abstract class Accessor$$Lambda<BeanT, ValueT> implements com.sun.xml.internal.bind.v2.runtime.unmarshaller.Receiver {
    public valueType: java.lang.Class<ValueT>
}

                            }
                        }
                    }
                }
            }
        }
    }
}