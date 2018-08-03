declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        abstract class _ServerImplBase extends org.omg.CORBA.portable.ObjectImpl implements com.sun.corba.se.spi.activation.Server , org.omg.CORBA.portable.InvokeHandler {
                            public constructor()
                            public _invoke(arg0: java.lang.String | string, arg1: org.omg.CORBA.portable.InputStream, arg2: org.omg.CORBA.portable.ResponseHandler): org.omg.CORBA.portable.OutputStream
                            public _ids(): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}