declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
class PlainClient implements javax.security.sasl.SaslClient {
    public getMechanismName(): string
    public hasInitialResponse(): boolean
    public dispose(): void
    public evaluateChallenge(arg0: byte[]): byte[]
    public isComplete(): boolean
    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
    protected finalize(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}