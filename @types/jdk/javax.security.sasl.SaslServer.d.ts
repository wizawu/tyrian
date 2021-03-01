declare namespace javax {
  namespace security {
    namespace sasl {

      interface SaslServer {

        getMechanismName(): java.lang.String
        evaluateResponse(arg0: byte[]): byte[]
        isComplete(): boolean
        getAuthorizationID(): java.lang.String
        unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
        wrap(arg0: byte[], arg1: int, arg2: int): byte[]
        getNegotiatedProperty(arg0: java.lang.String): java.lang.Object
        dispose(): void
      }

    }
  }
}
