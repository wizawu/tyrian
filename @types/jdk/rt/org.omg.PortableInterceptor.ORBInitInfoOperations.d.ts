declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            interface ORBInitInfoOperations {
                arguments(): java.lang.String[]
                orb_id(): string
                codec_factory(): org.omg.IOP.CodecFactory
                register_initial_reference(arg0: java.lang.String | string, arg1: org.omg.CORBA.Object): void
                resolve_initial_references(arg0: java.lang.String | string): org.omg.CORBA.Object
                add_client_request_interceptor(arg0: org.omg.PortableInterceptor.ClientRequestInterceptor): void
                add_server_request_interceptor(arg0: org.omg.PortableInterceptor.ServerRequestInterceptor): void
                add_ior_interceptor(arg0: org.omg.PortableInterceptor.IORInterceptor): void
                allocate_slot_id(): int
                register_policy_factory(arg0: int, arg1: org.omg.PortableInterceptor.PolicyFactory): void
            }
        }
    }
}