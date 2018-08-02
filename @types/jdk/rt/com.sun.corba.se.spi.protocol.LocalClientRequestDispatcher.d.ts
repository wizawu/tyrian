declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        interface LocalClientRequestDispatcher {
                            useLocalInvocation(arg0: org.omg.CORBA.Object): boolean
                            is_local(arg0: org.omg.CORBA.Object): boolean
                            servant_preinvoke(arg0: org.omg.CORBA.Object, arg1: java.lang.String | string, arg2: java.lang.Class): org.omg.CORBA.portable.ServantObject
                            servant_postinvoke(arg0: org.omg.CORBA.Object, arg1: org.omg.CORBA.portable.ServantObject): void
                        }
                    }
                }
            }
        }
    }
}