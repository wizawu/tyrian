declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    class HttpCallerInfo {
                        public readonly url: java.net.URL
                        public readonly host: string
                        public readonly protocol: string
                        public readonly prompt: string
                        public readonly scheme: string
                        public readonly port: int
                        public readonly addr: java.net.InetAddress
                        public readonly authType: java.net.Authenticator$RequestorType
                        public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo, arg1: java.lang.String | string)
                        public constructor(arg0: java.net.URL)
                        public constructor(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int)
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}