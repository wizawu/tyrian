declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
abstract class GenericIdentifiable implements com.sun.corba.se.spi.ior.Identifiable {
    public constructor(arg0: int, arg1: org.omg.CORBA_2_3.portable.InputStream)
    public getId(): int
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public constructor(arg0: int, arg1: byte[])
    public getData(): byte[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}