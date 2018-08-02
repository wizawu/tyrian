declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
                        class ORBVersionFactory {
                            public static getFOREIGN(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getOLD(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getNEW(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getJDK1_3_1_01(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getNEWER(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getPEORB(): com.sun.corba.se.spi.orb.ORBVersion
                            public static getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
                            public static create(arg0: org.omg.CORBA.portable.InputStream): com.sun.corba.se.spi.orb.ORBVersion
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}