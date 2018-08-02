declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
interface ServerRequestInterceptorOperations extends org.omg.PortableInterceptor.InterceptorOperations {
    receive_request_service_contexts(arg0: org.omg.PortableInterceptor.ServerRequestInfo): void
    receive_request(arg0: org.omg.PortableInterceptor.ServerRequestInfo): void
    send_reply(arg0: org.omg.PortableInterceptor.ServerRequestInfo): void
    send_exception(arg0: org.omg.PortableInterceptor.ServerRequestInfo): void
    send_other(arg0: org.omg.PortableInterceptor.ServerRequestInfo): void
}

        }
    }
}