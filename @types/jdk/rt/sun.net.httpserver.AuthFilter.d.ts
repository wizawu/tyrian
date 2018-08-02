declare namespace sun {
    namespace net {
        namespace httpserver {
            class AuthFilter extends com.sun.net.httpserver.Filter {
                public constructor(arg0: com.sun.net.httpserver.Authenticator)
                public description(): string
                public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): void
                public consumeInput(arg0: com.sun.net.httpserver.HttpExchange): void
                public doFilter(arg0: com.sun.net.httpserver.HttpExchange, arg1: com.sun.net.httpserver.Filter$Chain): void
                public static class: java.lang.Class<any>
            }
        }
    }
}