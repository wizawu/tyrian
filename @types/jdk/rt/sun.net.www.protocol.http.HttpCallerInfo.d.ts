declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    class HttpCallerInfo {
                        public url: java.net.URL
                        public host: string
                        public protocol: string
                        public prompt: string
                        public scheme: string
                        public port: int
                        public addr: java.net.InetAddress
                        public authType: java.net.Authenticator$RequestorType
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