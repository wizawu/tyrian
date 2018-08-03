declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class BasicAuthenticator extends com.sun.net.httpserver.Authenticator {
                    protected realm: string
                    public constructor(arg0: java.lang.String | string)
                    public getRealm(): string
                    public authenticate(arg0: com.sun.net.httpserver.HttpExchange): com.sun.net.httpserver.Authenticator$Result
                    public abstract checkCredentials(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
                interface BasicAuthenticator$$Lambda extends com.sun.net.httpserver.Authenticator {
                    (arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                }
            }
        }
    }
}