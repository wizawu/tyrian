declare namespace org {
    namespace omg {
        namespace CORBA {
            abstract class Request {
                public constructor()
                public abstract target(): org.omg.CORBA.Object
                public abstract operation(): string
                public abstract arguments(): org.omg.CORBA.NVList
                public abstract result(): org.omg.CORBA.NamedValue
                public abstract env(): org.omg.CORBA.Environment
                public abstract exceptions(): org.omg.CORBA.ExceptionList
                public abstract contexts(): org.omg.CORBA.ContextList
                public abstract ctx(): org.omg.CORBA.Context
                public abstract ctx(arg0: org.omg.CORBA.Context): void
                public abstract add_in_arg(): org.omg.CORBA.Any
                public abstract add_named_in_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
                public abstract add_inout_arg(): org.omg.CORBA.Any
                public abstract add_named_inout_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
                public abstract add_out_arg(): org.omg.CORBA.Any
                public abstract add_named_out_arg(arg0: java.lang.String | string): org.omg.CORBA.Any
                public abstract set_return_type(arg0: org.omg.CORBA.TypeCode): void
                public abstract return_value(): org.omg.CORBA.Any
                public abstract invoke(): void
                public abstract send_oneway(): void
                public abstract send_deferred(): void
                public abstract poll_response(): boolean
                public abstract get_response(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}