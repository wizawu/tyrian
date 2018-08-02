declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace ntlm {
                    class NTLMServer implements javax.security.sasl.SaslServer {
                        public getMechanismName(): string
                        public evaluateResponse(arg0: byte[]): byte[]
                        public isComplete(): boolean
                        public getAuthorizationID(): string
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        public dispose(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}