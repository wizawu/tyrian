declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    interface AuthCache {
                        put(arg0: java.lang.String | string, arg1: sun.net.www.protocol.http.AuthCacheValue): void
                        get(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.net.www.protocol.http.AuthCacheValue
                        remove(arg0: java.lang.String | string, arg1: sun.net.www.protocol.http.AuthCacheValue): void
                    }
                }
            }
        }
    }
}