declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
class ClientRequestInfoImpl extends com.sun.corba.se.impl.interceptors.RequestInfoImpl implements org.omg.PortableInterceptor.ClientRequestInfo {
    protected piCurrentPushed: boolean
    protected static MID_TARGET: int
    protected static MID_EFFECTIVE_TARGET: int
    protected static MID_EFFECTIVE_PROFILE: int
    protected static MID_RECEIVED_EXCEPTION: int
    protected static MID_RECEIVED_EXCEPTION_ID: int
    protected static MID_GET_EFFECTIVE_COMPONENT: int
    protected static MID_GET_EFFECTIVE_COMPONENTS: int
    protected static MID_GET_REQUEST_POLICY: int
    protected static MID_ADD_REQUEST_SERVICE_CONTEXT: int
    protected constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public target(): org.omg.CORBA.Object
    public effective_target(): org.omg.CORBA.Object
    public effective_profile(): org.omg.IOP.TaggedProfile
    public received_exception(): org.omg.CORBA.Any
    public received_exception_id(): string
    public get_effective_component(arg0: int): org.omg.IOP.TaggedComponent
    public get_effective_components(arg0: int): org.omg.IOP.TaggedComponent[]
    public get_request_policy(arg0: int): org.omg.CORBA.Policy
    public add_request_service_context(arg0: org.omg.IOP.ServiceContext, arg1: boolean): void
    public request_id(): int
    public operation(): string
    public arguments(): org.omg.Dynamic.Parameter[]
    public exceptions(): org.omg.CORBA.TypeCode[]
    public contexts(): java.lang.String[]
    public operation_context(): java.lang.String[]
    public result(): org.omg.CORBA.Any
    public response_expected(): boolean
    public forward_reference(): org.omg.CORBA.Object
    protected setLocatedIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    public get_request_service_context(arg0: int): org.omg.IOP.ServiceContext
    public get_reply_service_context(arg0: int): org.omg.IOP.ServiceContext
    public connection(): com.sun.corba.se.spi.legacy.connection.Connection
    protected setInfo(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    protected setReplyStatus(arg0: short): void
    protected setDIIRequest(arg0: org.omg.CORBA.Request): void
    protected setDIIInitiate(arg0: boolean): void
    protected isDIIInitiate(): boolean
    protected setPICurrentPushed(arg0: boolean): void
    protected isPICurrentPushed(): boolean
    protected setException(arg0: java.lang.Exception): void
    protected getIsOneWay(): boolean
    protected checkAccess(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}