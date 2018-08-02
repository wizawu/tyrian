declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
                            abstract class StubAdapter {
                                public static isStubClass(arg0: java.lang.Class): boolean
                                public static isStub(arg0: java.lang.Object): boolean
                                public static setDelegate(arg0: java.lang.Object, arg1: org.omg.CORBA.portable.Delegate): void
                                public static activateServant(arg0: org.omg.PortableServer.Servant): org.omg.CORBA.Object
                                public static activateTie(arg0: javax.rmi.CORBA.Tie): org.omg.CORBA.Object
                                public static getDelegate(arg0: java.lang.Object): org.omg.CORBA.portable.Delegate
                                public static getORB(arg0: java.lang.Object): org.omg.CORBA.ORB
                                public static getTypeIds(arg0: java.lang.Object): java.lang.String[]
                                public static connect(arg0: java.lang.Object, arg1: org.omg.CORBA.ORB): void
                                public static isLocal(arg0: java.lang.Object): boolean
                                public static request(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: boolean): org.omg.CORBA.portable.OutputStream
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}