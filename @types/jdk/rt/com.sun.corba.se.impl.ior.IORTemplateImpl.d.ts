declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class IORTemplateImpl extends com.sun.corba.se.spi.ior.IdentifiableContainerBase implements com.sun.corba.se.spi.ior.IORTemplate {
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public getObjectKeyTemplate(): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                            public constructor(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate)
                            public makeIOR(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.ior.IOR
                            public isEquivalent(arg0: com.sun.corba.se.spi.ior.IORFactory): boolean
                            public makeImmutable(): void
                            public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}