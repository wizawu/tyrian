declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
class _LocatorStub extends org.omg.CORBA.portable.ObjectImpl implements com.sun.corba.se.spi.activation.Locator {
    public constructor()
    public locateServer(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocation
    public locateServerForORB(arg0: int, arg1: java.lang.String | string): com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB
    public getEndpoint(arg0: java.lang.String | string): int
    public getServerPortForType(arg0: com.sun.corba.se.spi.activation.LocatorPackage.ServerLocationPerORB, arg1: java.lang.String | string): int
    public _ids(): java.lang.String[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}