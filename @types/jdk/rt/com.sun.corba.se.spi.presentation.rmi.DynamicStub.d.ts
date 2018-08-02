declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace presentation {
                        namespace rmi {
interface DynamicStub extends org.omg.CORBA.Object {
    setDelegate(arg0: org.omg.CORBA.portable.Delegate): void
    getDelegate(): org.omg.CORBA.portable.Delegate
    getORB(): org.omg.CORBA.ORB
    getTypeIds(): java.lang.String[]
    connect(arg0: org.omg.CORBA.ORB): void
    isLocal(): boolean
    request(arg0: java.lang.String | string, arg1: boolean): org.omg.CORBA.portable.OutputStream
}

                        }
                    }
                }
            }
        }
    }
}