declare namespace javax {
    namespace security {
        namespace sasl {
            interface SaslServer {
                getMechanismName(): string
                evaluateResponse(arg0: byte[]): byte[]
                isComplete(): boolean
                getAuthorizationID(): string
                unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                dispose(): void
            }
        }
    }
}