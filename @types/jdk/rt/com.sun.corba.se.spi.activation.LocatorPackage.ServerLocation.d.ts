declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
                        namespace LocatorPackage {
                            class ServerLocation implements org.omg.CORBA.portable.IDLEntity {
                                public hostname: string
                                public ports: com.sun.corba.se.spi.activation.ORBPortInfo[]
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.activation.ORBPortInfo[])
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}