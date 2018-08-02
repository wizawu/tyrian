declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
class AdaptedLister<BeanT, PropT, InMemItemT, OnWireItemT, PackT> extends com.sun.xml.internal.bind.v2.runtime.reflect.Lister<BeanT, PropT, OnWireItemT, PackT> {
    public iterator(arg0: PropT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): com.sun.xml.internal.bind.v2.runtime.reflect.ListIterator<OnWireItemT>
    public startPacking(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): PackT
    public addToPack(arg0: PackT, arg1: OnWireItemT): void
    public endPacking(arg0: PackT, arg1: BeanT, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): void
    public reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): void
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