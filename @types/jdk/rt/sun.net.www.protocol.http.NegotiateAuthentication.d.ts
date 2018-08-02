declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    class NegotiateAuthentication extends sun.net.www.protocol.http.AuthenticationInfo {
                        public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo)
                        public supportsPreemptiveAuthorization(): boolean
                        public static isSupported(arg0: sun.net.www.protocol.http.HttpCallerInfo): boolean
                        protected useAuthCache(): boolean
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