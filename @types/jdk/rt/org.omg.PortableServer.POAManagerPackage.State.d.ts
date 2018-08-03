declare namespace org {
    namespace omg {
        namespace PortableServer {
            namespace POAManagerPackage {
                class State implements org.omg.CORBA.portable.IDLEntity {
                    public static readonly _HOLDING: int
                    public static readonly HOLDING: org.omg.PortableServer.POAManagerPackage.State
                    public static readonly _ACTIVE: int
                    public static readonly ACTIVE: org.omg.PortableServer.POAManagerPackage.State
                    public static readonly _DISCARDING: int
                    public static readonly DISCARDING: org.omg.PortableServer.POAManagerPackage.State
                    public static readonly _INACTIVE: int
                    public static readonly INACTIVE: org.omg.PortableServer.POAManagerPackage.State
                    public value(): int
                    public static from_int(arg0: int): org.omg.PortableServer.POAManagerPackage.State
                    protected constructor(arg0: int)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}