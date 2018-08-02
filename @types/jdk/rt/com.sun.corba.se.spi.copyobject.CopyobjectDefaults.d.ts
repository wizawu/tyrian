declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace copyobject {
                        abstract class CopyobjectDefaults {
                            public static makeORBStreamObjectCopierFactory(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public static makeJavaStreamObjectCopierFactory(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public static getReferenceObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public static makeFallbackObjectCopierFactory(arg0: com.sun.corba.se.spi.copyobject.ObjectCopierFactory | com.sun.corba.se.spi.copyobject.ObjectCopierFactory$$Lambda, arg1: com.sun.corba.se.spi.copyobject.ObjectCopierFactory | com.sun.corba.se.spi.copyobject.ObjectCopierFactory$$Lambda): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}