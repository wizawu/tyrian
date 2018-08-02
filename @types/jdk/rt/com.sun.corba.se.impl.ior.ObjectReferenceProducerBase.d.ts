declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        abstract class ObjectReferenceProducerBase {
                            protected orb: com.sun.corba.se.spi.orb.ORB
                            public getIORFactory(): com.sun.corba.se.spi.ior.IORFactory
                            public getIORTemplateList(): com.sun.corba.se.spi.ior.IORTemplateList
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public make_object(arg0: java.lang.String | string, arg1: byte[]): org.omg.CORBA.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}