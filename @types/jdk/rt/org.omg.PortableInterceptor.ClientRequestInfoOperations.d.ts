declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface ClientRequestInfoOperations extends org.omg.PortableInterceptor.RequestInfoOperations {
                target(): org.omg.CORBA.Object
                effective_target(): org.omg.CORBA.Object
                effective_profile(): org.omg.IOP.TaggedProfile
                received_exception(): org.omg.CORBA.Any
                received_exception_id(): string
                get_effective_component(arg0: int): org.omg.IOP.TaggedComponent
                get_effective_components(arg0: int): org.omg.IOP.TaggedComponent[]
                get_request_policy(arg0: int): org.omg.CORBA.Policy
                add_request_service_context(arg0: org.omg.IOP.ServiceContext, arg1: boolean): void
            }
        }
    }
}