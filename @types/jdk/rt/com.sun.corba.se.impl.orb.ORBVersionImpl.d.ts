declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
                        class ORBVersionImpl implements com.sun.corba.se.spi.orb.ORBVersion {
                            public static FOREIGN: com.sun.corba.se.spi.orb.ORBVersion
                            public static OLD: com.sun.corba.se.spi.orb.ORBVersion
                            public static NEW: com.sun.corba.se.spi.orb.ORBVersion
                            public static JDK1_3_1_01: com.sun.corba.se.spi.orb.ORBVersion
                            public static NEWER: com.sun.corba.se.spi.orb.ORBVersion
                            public static PEORB: com.sun.corba.se.spi.orb.ORBVersion
                            public constructor(arg0: byte)
                            public getORBType(): byte
                            public write(arg0: org.omg.CORBA.portable.OutputStream): void
                            public toString(): string
                            public equals(arg0: java.lang.Object): boolean
                            public hashCode(): int
                            public lessThan(arg0: com.sun.corba.se.spi.orb.ORBVersion): boolean
                            public compareTo(arg0: java.lang.Object): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}