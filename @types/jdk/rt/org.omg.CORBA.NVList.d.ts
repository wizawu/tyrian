declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class NVList {
    public constructor()
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