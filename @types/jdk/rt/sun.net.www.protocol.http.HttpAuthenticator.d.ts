declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
interface HttpAuthenticator {
    schemeSupported(arg0: java.lang.String | string): boolean
    authString(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.lang.String | string): string
}

                }
            }
        }
    }
}