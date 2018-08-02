declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
class AuthCacheImpl implements sun.net.www.protocol.http.AuthCache {
    public constructor()
    public setMap(arg0: java.util.HashMap<java.lang.String, java.util.LinkedList<sun.net.www.protocol.http.AuthCacheValue>>): void
    public put(arg0: java.lang.String | string, arg1: sun.net.www.protocol.http.AuthCacheValue): void
    public get(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.net.www.protocol.http.AuthCacheValue
    public remove(arg0: java.lang.String | string, arg1: sun.net.www.protocol.http.AuthCacheValue): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}