declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface ServerRequestInfoOperations extends org.omg.PortableInterceptor.RequestInfoOperations {
                sending_exception(): org.omg.CORBA.Any
                object_id(): byte[]
                adapter_id(): byte[]
                server_id(): string
                orb_id(): string
                adapter_name(): java.lang.String[]
                target_most_derived_interface(): string
                get_server_policy(arg0: int): org.omg.CORBA.Policy
                set_slot(arg0: int, arg1: org.omg.CORBA.Any): void
                target_is_a(arg0: java.lang.String | string): boolean
                add_reply_service_context(arg0: org.omg.IOP.ServiceContext, arg1: boolean): void
            }
        }
    }
}