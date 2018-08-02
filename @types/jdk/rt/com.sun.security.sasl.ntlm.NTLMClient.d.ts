declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace ntlm {
class NTLMClient implements javax.security.sasl.SaslClient {
    public getMechanismName(): string
    public isComplete(): boolean
    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
    public dispose(): void
    public hasInitialResponse(): boolean
    public evaluateChallenge(arg0: byte[]): byte[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}