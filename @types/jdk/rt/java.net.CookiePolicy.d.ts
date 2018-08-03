declare namespace java {
    namespace net {
        interface CookiePolicy {
            ACCEPT_ALL: java.net.CookiePolicy
            ACCEPT_NONE: java.net.CookiePolicy
            ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy
            shouldAccept(arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
        }
        interface CookiePolicy$$Lambda {
            (arg0: java.net.URI, arg1: java.net.HttpCookie): boolean
        }
    }
}