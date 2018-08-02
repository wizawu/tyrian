declare namespace org {
    namespace omg {
        namespace CORBA {
abstract class Request {
    public constructor()
    public target(): org.omg.CORBA.Object
    public operation(): string
    public arguments(): org.omg.CORBA.NVList
    public result(): org.omg.CORBA.NamedValue
    public env(): org.omg.CORBA.Environment
    public exceptions(): org.omg.CORBA.ExceptionList
    public contexts(): org.omg.CORBA.ContextList
    public ctx(): org.omg.CORBA.Context
    public ctx(arg0: org.omg.CORBA.Context): void
    public add_in_arg(): org.omg.CORBA.Any
    public add_named_in_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
    public add_inout_arg(): org.omg.CORBA.Any
    public add_named_inout_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
    public add_out_arg(): org.omg.CORBA.Any
    public add_named_out_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
    public set_return_type(arg0: org.omg.CORBA.TypeCode): void
    public return_value(): org.omg.CORBA.Any
    public invoke(): void
    public send_oneway(): void
    public send_deferred(): void
    public poll_response(): boolean
    public get_response(): void
    public static class: java.lang.Class<any>
}

        }
    }
}