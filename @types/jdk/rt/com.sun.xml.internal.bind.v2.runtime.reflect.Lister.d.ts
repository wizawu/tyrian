declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
abstract class Lister<BeanT, PropT, ItemT, PackT> {
    public static ERROR: com.sun.xml.internal.bind.v2.runtime.reflect.Lister
    protected constructor()
    public iterator(arg0: PropT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): com.sun.xml.internal.bind.v2.runtime.reflect.ListIterator<ItemT>
    public startPacking(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): PackT
    public addToPack(arg0: PackT, arg1: ItemT): void
    public endPacking(arg0: PackT, arg1: BeanT, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): void
    public reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, PropT> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, PropT>): void
    public static create<BeanT, PropT, ItemT, PackT>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: com.sun.xml.internal.bind.v2.model.core.ID, arg2: com.sun.xml.internal.bind.v2.model.core.Adapter<java.lang.reflect.Type, java.lang.Class>): com.sun.xml.internal.bind.v2.runtime.reflect.Lister<BeanT, PropT, ItemT, PackT>
    public static getErrorInstance<A, B, C, D>(): com.sun.xml.internal.bind.v2.runtime.reflect.Lister<A, B, C, D>
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