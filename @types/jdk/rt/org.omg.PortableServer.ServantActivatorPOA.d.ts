declare namespace org {
    namespace omg {
        namespace PortableServer {
            abstract class ServantActivatorPOA extends org.omg.PortableServer.Servant implements org.omg.PortableServer.ServantActivatorOperations , org.omg.CORBA.portable.InvokeHandler {
                public constructor()
                public _invoke(arg0: java.lang.String | string, arg1: org.omg.CORBA.portable.InputStream, arg2: org.omg.CORBA.portable.ResponseHandler): org.omg.CORBA.portable.OutputStream
                public _all_interfaces(arg0: org.omg.PortableServer.POA, arg1: byte[]): java.lang.String[]
                public _this(): org.omg.PortableServer.ServantActivator
                public _this(arg0: org.omg.CORBA.ORB): org.omg.PortableServer.ServantActivator
                public static class: java.lang.Class<any>
            }
        }
    }
}