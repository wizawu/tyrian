declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        namespace iiop {
                            class GIOPVersion {
                                public static V1_0: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static V1_1: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static V1_2: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static V1_3: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static V13_XX: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static DEFAULT_VERSION: com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static VERSION_1_0: int
                                public static VERSION_1_1: int
                                public static VERSION_1_2: int
                                public static VERSION_1_3: int
                                public static VERSION_13_XX: int
                                public constructor()
                                public constructor(arg0: byte, arg1: byte)
                                public constructor(arg0: int, arg1: int)
                                public getMajor(): byte
                                public getMinor(): byte
                                public equals(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): boolean
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public lessThan(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): boolean
                                public intValue(): int
                                public toString(): string
                                public static getInstance(arg0: byte, arg1: byte): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static parseVersion(arg0: java.lang.String | string): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public static chooseRequestVersion(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public supportsIORIIOPProfileComponents(): boolean
                                public read(arg0: org.omg.CORBA.portable.InputStream): void
                                public write(arg0: org.omg.CORBA.portable.OutputStream): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}