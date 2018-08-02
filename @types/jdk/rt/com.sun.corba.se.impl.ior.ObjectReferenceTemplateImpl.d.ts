declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class ObjectReferenceTemplateImpl extends com.sun.corba.se.impl.ior.ObjectReferenceProducerBase implements org.omg.PortableInterceptor.ObjectReferenceTemplate , org.omg.CORBA.portable.StreamableValue {
                            public static repositoryId: string
                            public constructor(arg0: org.omg.CORBA.portable.InputStream)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IORTemplate)
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public _truncatable_ids(): java.lang.String[]
                            public _type(): org.omg.CORBA.TypeCode
                            public _read(arg0: org.omg.CORBA.portable.InputStream): void
                            public _write(arg0: org.omg.CORBA.portable.OutputStream): void
                            public server_id(): string
                            public orb_id(): string
                            public adapter_name(): java.lang.String[]
                            public getIORFactory(): com.sun.corba.se.spi.ior.IORFactory
                            public getIORTemplateList(): com.sun.corba.se.spi.ior.IORTemplateList
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}