declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
class POAManagerImpl extends org.omg.CORBA.LocalObject implements org.omg.PortableServer.POAManager {
    public toString(): string
    public getManagerId(): int
    public getORTState(): short
    public activate(): void
    public hold_requests(arg0: boolean): void
    public discard_requests(arg0: boolean): void
    public deactivate(arg0: boolean, arg1: boolean): void
    public get_state(): org.omg.PortableServer.POAManagerPackage.State
    public implicitActivation(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}