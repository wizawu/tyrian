declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CachedCodeBase extends com.sun.org.omg.SendingContext._CodeBaseImplBase {
                            public static cleanCache(arg0: com.sun.corba.se.spi.orb.ORB): void
                            public constructor(arg0: com.sun.corba.se.spi.transport.CorbaConnection)
                            public get_ir(): com.sun.org.omg.CORBA.Repository
                            public implementation(arg0: java.lang.String | string): string
                            public implementations(arg0: java.lang.String[]): java.lang.String[]
                            public meta(arg0: java.lang.String | string): com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription
                            public metas(arg0: java.lang.String[]): com.sun.org.omg.CORBA.ValueDefPackage.FullValueDescription[]
                            public bases(arg0: java.lang.String | string): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}