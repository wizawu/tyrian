declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
class DigestAuthentication extends sun.net.www.protocol.http.AuthenticationInfo {
    public constructor(arg0: boolean, arg1: java.net.URL, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.net.PasswordAuthentication, arg5: sun.net.www.protocol.http.DigestAuthentication$Parameters)
    public constructor(arg0: boolean, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.net.PasswordAuthentication, arg6: sun.net.www.protocol.http.DigestAuthentication$Parameters)
    public supportsPreemptiveAuthorization(): boolean
    public getHeaderValue(arg0: java.net.URL, arg1: java.lang.String | string): string
    public isAuthorizationStale(arg0: java.lang.String | string): boolean
    public setHeaders(arg0: sun.net.www.protocol.http.HttpURLConnection, arg1: sun.net.www.HeaderParser, arg2: java.lang.String | string): boolean
    public checkResponse(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.net.URL): void
    public checkResponse(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}