declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
interface ORBVersion extends java.lang.Comparable {
    FOREIGN: byte
    OLD: byte
    NEW: byte
    JDK1_3_1_01: byte
    NEWER: byte
    PEORB: byte
    getORBType(): byte
    write(arg0: org.omg.CORBA.portable.OutputStream): void
    lessThan(arg0: com.sun.corba.se.spi.orb.ORBVersion): boolean
}

                    }
                }
            }
        }
    }
}