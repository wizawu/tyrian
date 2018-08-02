declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
interface RequestInfoOperations {
    request_id(): int
    operation(): string
    arguments(): org.omg.Dynamic.Parameter[]
    exceptions(): org.omg.CORBA.TypeCode[]
    contexts(): java.lang.String[]
    operation_context(): java.lang.String[]
    result(): org.omg.CORBA.Any
    response_expected(): boolean
    sync_scope(): short
    reply_status(): short
    forward_reference(): org.omg.CORBA.Object
    get_slot(arg0: int): org.omg.CORBA.Any
    get_request_service_context(arg0: int): org.omg.IOP.ServiceContext
    get_reply_service_context(arg0: int): org.omg.IOP.ServiceContext
}

        }
    }
}