declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
class _ActivatorStub extends org.omg.CORBA.portable.ObjectImpl implements com.sun.corba.se.spi.activation.Activator {
    public constructor()
    public active(arg0: int, arg1: com.sun.corba.se.spi.activation.Server): void
    public registerEndpoints(arg0: int, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.activation.EndPointInfo[]): void
    public getActiveServers(): int[]
    public activate(arg0: int): void
    public shutdown(arg0: int): void
    public install(arg0: int): void
    public getORBNames(arg0: int): java.lang.String[]
    public uninstall(arg0: int): void
    public _ids(): java.lang.String[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}