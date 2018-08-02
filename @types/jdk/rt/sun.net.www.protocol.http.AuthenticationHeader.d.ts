declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    class AuthenticationHeader {
                        public toString(): string
                        public constructor(arg0: java.lang.String | string, arg1: sun.net.www.MessageHeader, arg2: sun.net.www.protocol.http.HttpCallerInfo, arg3: boolean)
                        public constructor(arg0: java.lang.String | string, arg1: sun.net.www.MessageHeader, arg2: sun.net.www.protocol.http.HttpCallerInfo, arg3: boolean, arg4: java.util.Set<java.lang.String>)
                        public getHttpCallerInfo(): sun.net.www.protocol.http.HttpCallerInfo
                        public headerParser(): sun.net.www.HeaderParser
                        public scheme(): string
                        public raw(): string
                        public isPresent(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}