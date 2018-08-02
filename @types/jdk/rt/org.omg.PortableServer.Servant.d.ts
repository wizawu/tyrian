declare namespace org {
    namespace omg {
        namespace PortableServer {
abstract class Servant {
    public constructor()
    public _get_delegate(): org.omg.PortableServer.portable.Delegate
    public _set_delegate(arg0: org.omg.PortableServer.portable.Delegate): void
    public _this_object(): org.omg.CORBA.Object
    public _this_object(arg0: org.omg.CORBA.ORB): org.omg.CORBA.Object
    public _orb(): org.omg.CORBA.ORB
    public _poa(): org.omg.PortableServer.POA
    public _object_id(): byte[]
    public _default_POA(): org.omg.PortableServer.POA
    public _is_a(arg0: java.lang.String | string): boolean
    public _non_existent(): boolean
    public _get_interface_def(): org.omg.CORBA.Object
    public _all_interfaces(arg0: org.omg.PortableServer.POA, arg1: byte[]): java.lang.String[]
    public static class: java.lang.Class<any>
}

        }
    }
}