declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
class ServerRequestInfoImpl extends com.sun.corba.se.impl.interceptors.RequestInfoImpl implements org.omg.PortableInterceptor.ServerRequestInfo {
    protected static MID_SENDING_EXCEPTION: int
    protected static MID_OBJECT_ID: int
    protected static MID_ADAPTER_ID: int
    protected static MID_TARGET_MOST_DERIVED_INTERFACE: int
    protected static MID_GET_SERVER_POLICY: int
    protected static MID_SET_SLOT: int
    protected static MID_TARGET_IS_A: int
    protected static MID_ADD_REPLY_SERVICE_CONTEXT: int
    protected static MID_SERVER_ID: int
    protected static MID_ORB_ID: int
    protected static MID_ADAPTER_NAME: int
    public sending_exception(): org.omg.CORBA.Any
    public object_id(): byte[]
    public server_id(): string
    public orb_id(): string
    public adapter_name(): java.lang.String[]
    public adapter_id(): byte[]
    public target_most_derived_interface(): string
    public get_server_policy(arg0: int): org.omg.CORBA.Policy
    public set_slot(arg0: int, arg1: org.omg.CORBA.Any): void
    public target_is_a(arg0: java.lang.String | string): boolean
    public add_reply_service_context(arg0: org.omg.IOP.ServiceContext, arg1: boolean): void
    public request_id(): int
    public operation(): string
    public arguments(): org.omg.Dynamic.Parameter[]
    public exceptions(): org.omg.CORBA.TypeCode[]
    public contexts(): java.lang.String[]
    public operation_context(): java.lang.String[]
    public result(): org.omg.CORBA.Any
    public response_expected(): boolean
    public forward_reference(): org.omg.CORBA.Object
    public get_request_service_context(arg0: int): org.omg.IOP.ServiceContext
    public get_reply_service_context(arg0: int): org.omg.IOP.ServiceContext
    protected setCurrentExecutionPoint(arg0: int): void
    protected setInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.oa.ObjectAdapter, arg2: byte[], arg3: com.sun.corba.se.spi.ior.ObjectKeyTemplate): void
    protected setDSIArguments(arg0: org.omg.CORBA.NVList): void
    protected setDSIException(arg0: org.omg.CORBA.Any): void
    protected setDSIResult(arg0: org.omg.CORBA.Any): void
    protected setException(arg0: java.lang.Exception): void
    protected setInfo(arg0: java.lang.Object, arg1: java.lang.String | string): void
    protected setReplyStatus(arg0: short): void
    protected checkAccess(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}