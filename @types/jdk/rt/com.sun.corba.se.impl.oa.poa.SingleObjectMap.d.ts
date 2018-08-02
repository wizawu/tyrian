declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
class SingleObjectMap extends com.sun.corba.se.impl.oa.poa.ActiveObjectMap {
    public constructor(arg0: com.sun.corba.se.impl.oa.poa.POAImpl)
    public getKey(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry): com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key
    protected putEntry(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry): void
    public hasMultipleIDs(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry): boolean
    protected removeEntry(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry, arg1: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): void
    public clear(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}