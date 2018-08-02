declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
class NVListImpl extends org.omg.CORBA.NVList {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int)
    public count(): int
    public add(arg0: int): org.omg.CORBA.NamedValue
    public add_item(arg0: java.lang.String | string, arg1: int): org.omg.CORBA.NamedValue
    public add_value(arg0: java.lang.String | string, arg1: org.omg.CORBA.Any, arg2: int): org.omg.CORBA.NamedValue
    public item(arg0: int): org.omg.CORBA.NamedValue
    public remove(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}