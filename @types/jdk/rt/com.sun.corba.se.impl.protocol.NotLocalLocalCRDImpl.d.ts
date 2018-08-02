declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
class NotLocalLocalCRDImpl implements com.sun.corba.se.spi.protocol.LocalClientRequestDispatcher {
    public constructor()
    public useLocalInvocation(arg0: org.omg.CORBA.Object): boolean
    public is_local(arg0: org.omg.CORBA.Object): boolean
    public servant_preinvoke(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string, arg2: java.lang.Class): org.omg.CORBA.portable.ServantObject
    public servant_postinvoke(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.portable.ServantObject): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}