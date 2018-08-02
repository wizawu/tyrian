declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace reflect {
class Lister$ArrayLister<BeanT, ItemT> extends com.sun.xml.internal.bind.v2.runtime.reflect.Lister<BeanT, ItemT[], ItemT, com.sun.xml.internal.bind.v2.runtime.reflect.Lister$Pack<ItemT>> {
    public constructor(arg0: java.lang.Class<ItemT>)
    public iterator(arg0: ItemT[], arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): com.sun.xml.internal.bind.v2.runtime.reflect.ListIterator<ItemT>
    public startPacking(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ItemT[]> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, ItemT[]>): com.sun.xml.internal.bind.v2.runtime.reflect.Lister$Pack
    public addToPack(arg0: com.sun.xml.internal.bind.v2.runtime.reflect.Lister$Pack<ItemT>, arg1: ItemT): void
    public endPacking(arg0: com.sun.xml.internal.bind.v2.runtime.reflect.Lister$Pack<ItemT>, arg1: BeanT, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ItemT[]> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, ItemT[]>): void
    public reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, ItemT[]> | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda<BeanT, ItemT[]>): void
    public endPacking(arg0: java.lang.Object, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda): void
    public addToPack(arg0: java.lang.Object, arg1: java.lang.Object): void
    public startPacking(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor | com.sun.xml.internal.bind.v2.runtime.reflect.Accessor$$Lambda): java.lang.Object
    public iterator(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): com.sun.xml.internal.bind.v2.runtime.reflect.ListIterator
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