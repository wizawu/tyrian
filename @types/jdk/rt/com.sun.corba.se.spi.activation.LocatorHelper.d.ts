declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace activation {
abstract class LocatorHelper {
    public constructor()
    public static insert(arg0: org.omg.CORBA.Any, arg1: com.sun.corba.se.spi.activation.Locator): void
    public static extract(arg0: org.omg.CORBA.Any): com.sun.corba.se.spi.activation.Locator
    public static type(): org.omg.CORBA.TypeCode
    public static id(): string
    public static read(arg0: org.omg.CORBA.portable.InputStream): com.sun.corba.se.spi.activation.Locator
    public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: com.sun.corba.se.spi.activation.Locator): void
    public static narrow(arg0: org.omg.CORBA.Object): com.sun.corba.se.spi.activation.Locator
    public static unchecked_narrow(arg0: org.omg.CORBA.Object): com.sun.corba.se.spi.activation.Locator
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}