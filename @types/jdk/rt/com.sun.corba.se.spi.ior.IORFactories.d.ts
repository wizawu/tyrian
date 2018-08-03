declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        class IORFactories {
                            public static makeObjectId(arg0: byte[]): com.sun.corba.se.spi.ior.ObjectId
                            public static makeObjectKey(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: com.sun.corba.se.spi.ior.ObjectId | com.sun.corba.se.spi.ior.ObjectId$$Lambda): com.sun.corba.se.spi.ior.ObjectKey
                            public static makeIOR(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.spi.ior.IOR
                            public static makeIOR(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.ior.IOR
                            public static makeIOR(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.IOR
                            public static makeIORTemplate(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate): com.sun.corba.se.spi.ior.IORTemplate
                            public static makeIORTemplate(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.IORTemplate
                            public static makeIORTemplateList(): com.sun.corba.se.spi.ior.IORTemplateList
                            public static makeIORTemplateList(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.IORTemplateList
                            public static getIORFactory(arg0: org.omg.PortableInterceptor.ObjectReferenceTemplate): com.sun.corba.se.spi.ior.IORFactory
                            public static getIORTemplateList(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory | org.omg.PortableInterceptor.ObjectReferenceFactory$$Lambda): com.sun.corba.se.spi.ior.IORTemplateList
                            public static makeObjectReferenceTemplate(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IORTemplate): org.omg.PortableInterceptor.ObjectReferenceTemplate
                            public static makeObjectReferenceFactory(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IORTemplateList): org.omg.PortableInterceptor.ObjectReferenceFactory
                            public static makeObjectKeyFactory(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.ior.ObjectKeyFactory
                            public static getIOR(arg0: org.omg.CORBA.Object): com.sun.corba.se.spi.ior.IOR
                            public static makeObjectReference(arg0: com.sun.corba.se.spi.ior.IOR): org.omg.CORBA.Object
                            public static registerValueFactories(arg0: com.sun.corba.se.spi.orb.ORB): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}