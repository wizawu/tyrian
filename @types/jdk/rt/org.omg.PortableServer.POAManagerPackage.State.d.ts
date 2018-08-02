declare namespace org {
    namespace omg {
        namespace PortableServer {
            namespace POAManagerPackage {
                class State implements org.omg.CORBA.portable.IDLEntity {
                    public static _HOLDING: int
                    public static HOLDING: org.omg.PortableServer.POAManagerPackage.State
                    public static _ACTIVE: int
                    public static ACTIVE: org.omg.PortableServer.POAManagerPackage.State
                    public static _DISCARDING: int
                    public static DISCARDING: org.omg.PortableServer.POAManagerPackage.State
                    public static _INACTIVE: int
                    public static INACTIVE: org.omg.PortableServer.POAManagerPackage.State
                    public value(): int
                    public static from_int(arg0: int): org.omg.PortableServer.POAManagerPackage.State
                    protected constructor(arg0: int)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}