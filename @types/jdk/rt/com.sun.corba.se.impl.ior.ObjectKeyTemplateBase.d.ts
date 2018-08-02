declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        abstract class ObjectKeyTemplateBase implements com.sun.corba.se.spi.ior.ObjectKeyTemplate {
                            public static JIDL_ORB_ID: string
                            public static JIDL_OAID: com.sun.corba.se.spi.ior.ObjectAdapterId
                            protected wrapper: com.sun.corba.se.impl.logging.IORSystemException
                            public getAdapterId(): byte[]
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: int, arg3: int, arg4: java.lang.String | string, arg5: com.sun.corba.se.spi.ior.ObjectAdapterId)
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public getSubcontractId(): int
                            public getServerId(): int
                            public getORBId(): string
                            public getObjectAdapterId(): com.sun.corba.se.spi.ior.ObjectAdapterId
                            public write(arg0: com.sun.corba.se.spi.ior.ObjectId, arg1: org.omg.CORBA_2_3.portable.OutputStream): void
                            public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            protected writeTemplate(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            protected getMagic(): int
                            public setORBVersion(arg0: com.sun.corba.se.spi.orb.ORBVersion): void
                            public getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                            protected readObjectKey(arg0: org.omg.CORBA_2_3.portable.InputStream): byte[]
                            public getServerRequestDispatcher(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}