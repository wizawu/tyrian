declare namespace org {
    namespace omg {
        namespace CORBA_2_3 {
abstract class ORB extends org.omg.CORBA.ORB {
    public constructor()
    public register_value_factory(arg0: java.lang.String | string, arg1: org.omg.CORBA.portable.ValueFactory | org.omg.CORBA.portable.ValueFactory$$Lambda): org.omg.CORBA.portable.ValueFactory
    public unregister_value_factory(arg0: java.lang.String | string): void
    public lookup_value_factory(arg0: java.lang.String | string): org.omg.CORBA.portable.ValueFactory
    public get_value_def(arg0: java.lang.String | string): org.omg.CORBA.Object
    public set_delegate(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

        }
    }
}