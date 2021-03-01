declare namespace javax {
  namespace security {
    namespace sasl {

      interface SaslClient {

        getMechanismName(): java.lang.String
        hasInitialResponse(): boolean
        evaluateChallenge(arg0: byte[]): byte[]
        isComplete(): boolean
        unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
        wrap(arg0: byte[], arg1: int, arg2: int): byte[]
        getNegotiatedProperty(arg0: java.lang.String): java.lang.Object
        dispose(): void
      }

    }
  }
}
