declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
abstract class ActiveObjectMap {
    protected poa: com.sun.corba.se.impl.oa.poa.POAImpl
    protected constructor(arg0: com.sun.corba.se.impl.oa.poa.POAImpl)
    public static create(arg0: com.sun.corba.se.impl.oa.poa.POAImpl, arg1: boolean): com.sun.corba.se.impl.oa.poa.ActiveObjectMap
    public contains(arg0: org.omg.PortableServer.Servant): boolean
    public containsKey(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): boolean
    public get(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): com.sun.corba.se.impl.oa.poa.AOMEntry
    public getServant(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry): org.omg.PortableServer.Servant
    public getKey(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry): com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key
    public getKey(arg0: org.omg.PortableServer.Servant): com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key
    protected putEntry(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry): void
    public putServant(arg0: org.omg.PortableServer.Servant, arg1: com.sun.corba.se.impl.oa.poa.AOMEntry): void
    protected removeEntry(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry, arg1: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): void
    public remove(arg0: com.sun.corba.se.impl.oa.poa.ActiveObjectMap$Key): void
    public hasMultipleIDs(arg0: com.sun.corba.se.impl.oa.poa.AOMEntry): boolean
    protected clear(): void
    public keySet(): java.util.Set
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}