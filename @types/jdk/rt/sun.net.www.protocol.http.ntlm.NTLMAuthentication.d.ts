declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    namespace ntlm {
class NTLMAuthentication extends sun.net.www.protocol.http.AuthenticationInfo {
    public static supportsTransparentAuth(): boolean
    public static isTrustedSite(arg0: java.net.URL): boolean
    public constructor(arg0: boolean, arg1: java.net.URL, arg2: java.net.PasswordAuthentication)
    public constructor(arg0: boolean, arg1: java.lang.String | string, arg2: int, arg3: java.net.PasswordAuthentication)
    protected useAuthCache(): boolean
    public supportsPreemptiveAuthorization(): boolean
    public getHeaderValue(arg0: java.net.URL, arg1: java.lang.String | string): string
    public isAuthorizationStale(arg0: java.lang.String | string): boolean
    public setHeaders(arg0: sun.net.www.protocol.http.HttpURLConnection, arg1: sun.net.www.HeaderParser, arg2: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}