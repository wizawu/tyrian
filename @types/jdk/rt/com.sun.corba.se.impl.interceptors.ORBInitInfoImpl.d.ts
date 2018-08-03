declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
                        class ORBInitInfoImpl extends org.omg.CORBA.LocalObject implements org.omg.PortableInterceptor.ORBInitInfo , com.sun.corba.se.spi.legacy.interceptor.ORBInitInfoExt {
                            public static STAGE_PRE_INIT: int
                            public static STAGE_POST_INIT: int
                            public static STAGE_CLOSED: int
                            public getORB(): com.sun.corba.se.spi.orb.ORB
                            public arguments(): java.lang.String[]
                            public orb_id(): string
                            public codec_factory(): org.omg.IOP.CodecFactory
                            public register_initial_reference(arg0: java.lang.String | string, arg1: org.omg.CORBA.Object): void
                            public resolve_initial_references(arg0: java.lang.String | string): org.omg.CORBA.Object
                            public add_client_request_interceptor_with_policy(arg0: org.omg.PortableInterceptor.ClientRequestInterceptor, arg1: org.omg.CORBA.Policy[]): void
                            public add_client_request_interceptor(arg0: org.omg.PortableInterceptor.ClientRequestInterceptor): void
                            public add_server_request_interceptor_with_policy(arg0: org.omg.PortableInterceptor.ServerRequestInterceptor, arg1: org.omg.CORBA.Policy[]): void
                            public add_server_request_interceptor(arg0: org.omg.PortableInterceptor.ServerRequestInterceptor): void
                            public add_ior_interceptor_with_policy(arg0: org.omg.PortableInterceptor.IORInterceptor, arg1: org.omg.CORBA.Policy[]): void
                            public add_ior_interceptor(arg0: org.omg.PortableInterceptor.IORInterceptor): void
                            public allocate_slot_id(): int
                            public register_policy_factory(arg0: int, arg1: org.omg.PortableInterceptor.PolicyFactory): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}