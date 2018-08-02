declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace javax {
                        namespace rmi {
                            class PortableRemoteObject implements javax.rmi.CORBA.PortableRemoteObjectDelegate {
                                public constructor()
                                public exportObject(arg0: java.rmi.Remote): void
                                public toStub(arg0: java.rmi.Remote): java.rmi.Remote
                                public unexportObject(arg0: java.rmi.Remote): void
                                public narrow(arg0: java.lang.Object, arg1: java.lang.Class): java.lang.Object
                                public connect(arg0: java.rmi.Remote, arg1: java.rmi.Remote): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}