declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
interface ClientRequestInterceptorOperations extends org.omg.PortableInterceptor.InterceptorOperations {
    send_request(arg0: org.omg.PortableInterceptor.ClientRequestInfo): void
    send_poll(arg0: org.omg.PortableInterceptor.ClientRequestInfo): void
    receive_reply(arg0: org.omg.PortableInterceptor.ClientRequestInfo): void
    receive_exception(arg0: org.omg.PortableInterceptor.ClientRequestInfo): void
    receive_other(arg0: org.omg.PortableInterceptor.ClientRequestInfo): void
}

        }
    }
}