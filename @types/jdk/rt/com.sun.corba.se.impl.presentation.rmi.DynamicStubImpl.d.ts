declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace presentation {
                        namespace rmi {
class DynamicStubImpl extends org.omg.CORBA_2_3.portable.ObjectImpl implements com.sun.corba.se.spi.presentation.rmi.DynamicStub , java.io.Serializable {
    public setSelf(arg0: com.sun.corba.se.spi.presentation.rmi.DynamicStub): void
    public getSelf(): com.sun.corba.se.spi.presentation.rmi.DynamicStub
    public constructor(arg0: java.lang.String[])
    public setDelegate(arg0: org.omg.CORBA.portable.Delegate): void
    public getDelegate(): org.omg.CORBA.portable.Delegate
    public getORB(): org.omg.CORBA.ORB
    public _ids(): java.lang.String[]
    public getTypeIds(): java.lang.String[]
    public connect(arg0: org.omg.CORBA.ORB): void
    public isLocal(): boolean
    public request(arg0: java.lang.String | string, arg1: boolean): org.omg.CORBA.portable.OutputStream
    public readResolve(): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}