declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
class ReflectiveTie extends org.omg.PortableServer.Servant implements javax.rmi.CORBA.Tie {
    public constructor(arg0: com.sun.corba.se.spi.presentation.rmi.PresentationManager, arg1: com.sun.corba.se.impl.logging.ORBUtilSystemException)
    public _all_interfaces(arg0: org.omg.PortableServer.POA, arg1: byte[]): java.lang.String[]
    public setTarget(arg0: java.rmi.Remote): void
    public getTarget(): java.rmi.Remote
    public thisObject(): org.omg.CORBA.Object
    public deactivate(): void
    public orb(): org.omg.CORBA.ORB
    public orb(arg0: org.omg.CORBA.ORB): void
    public _invoke(arg0: java.lang.String | string, arg1: org.omg.CORBA.portable.InputStream, arg2: org.omg.CORBA.portable.ResponseHandler): org.omg.CORBA.portable.OutputStream
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}