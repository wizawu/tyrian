declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class ObjectKeyFactoryImpl implements com.sun.corba.se.spi.ior.ObjectKeyFactory {
                            public static readonly MAGIC_BASE: int
                            public static readonly JAVAMAGIC_OLD: int
                            public static readonly JAVAMAGIC_NEW: int
                            public static readonly JAVAMAGIC_NEWER: int
                            public static readonly MAX_MAGIC: int
                            public static readonly JDK1_3_1_01_PATCH_LEVEL: byte
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public create(arg0: byte[]): com.sun.corba.se.spi.ior.ObjectKey
                            public createTemplate(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.ObjectKeyTemplate
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}