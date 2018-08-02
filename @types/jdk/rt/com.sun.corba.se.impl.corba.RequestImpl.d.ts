declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace corba {
class RequestImpl extends org.omg.CORBA.Request {
    protected _target: org.omg.CORBA.Object
    protected _opName: string
    protected _arguments: org.omg.CORBA.NVList
    protected _exceptions: org.omg.CORBA.ExceptionList
    protected _env: org.omg.CORBA.Environment
    protected _orb: com.sun.corba.se.spi.orb.ORB
    protected _isOneWay: boolean
    protected gotResponse: boolean
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.CORBA.Object, arg2: org.omg.CORBA.Context, arg3: java.lang.String | string, arg4: org.omg.CORBA.NVList, arg5: org.omg.CORBA.NamedValue, arg6: org.omg.CORBA.ExceptionList, arg7: org.omg.CORBA.ContextList)
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
    public add_exception(arg0: org.omg.CORBA.TypeCode): void
    public invoke(): void
    public send_oneway(): void
    public send_deferred(): void
    public poll_response(): boolean
    public get_response(): void
    protected doInvocation(): void
    public unmarshalReply(arg0: org.omg.CORBA.portable.InputStream): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}