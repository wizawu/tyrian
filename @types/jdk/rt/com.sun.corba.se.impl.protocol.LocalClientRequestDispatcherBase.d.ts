declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
abstract class LocalClientRequestDispatcherBase implements com.sun.corba.se.spi.protocol.LocalClientRequestDispatcher {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected servantIsLocal: boolean
    protected oaf: com.sun.corba.se.spi.oa.ObjectAdapterFactory
    protected oaid: com.sun.corba.se.spi.ior.ObjectAdapterId
    protected objectId: byte[]
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: com.sun.corba.se.spi.ior.IOR)
    public getObjectId(): byte[]
    public is_local(arg0: org.omg.CORBA.Object): boolean
    public useLocalInvocation(arg0: org.omg.CORBA.Object): boolean
    protected checkForCompatibleServant(arg0: org.omg.CORBA.portable.ServantObject, arg1: java.lang.Class): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}