declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
abstract class AuthenticationInfo extends sun.net.www.protocol.http.AuthCacheValue implements java.lang.Cloneable {
    public static SERVER_AUTHENTICATION: char
    public static PROXY_AUTHENTICATION: char
    protected pw: java.net.PasswordAuthentication
    public credentials(): java.net.PasswordAuthentication
    public getAuthType(): sun.net.www.protocol.http.AuthCacheValue$Type
    public getHost(): string
    public getPort(): int
    public getRealm(): string
    public getPath(): string
    public getProtocolScheme(): string
    protected useAuthCache(): boolean
    public constructor(arg0: char, arg1: sun.net.www.protocol.http.AuthScheme, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string)
    public clone(): java.lang.Object
    public constructor(arg0: char, arg1: sun.net.www.protocol.http.AuthScheme, arg2: java.net.URL, arg3: java.lang.String | string)
    public supportsPreemptiveAuthorization(): boolean
    public getHeaderName(): string
    public getHeaderValue(arg0: java.net.URL, arg1: java.lang.String | string): string
    public setHeaders(arg0: sun.net.www.protocol.http.HttpURLConnection, arg1: sun.net.www.HeaderParser, arg2: java.lang.String | string): boolean
    public isAuthorizationStale(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}