declare namespace javax {
  namespace security {
    namespace sasl {

      interface SaslClient {
        getMechanismName(): java.lang.String
        hasInitialResponse(): boolean
        evaluateChallenge(arg0: number[] | java.lang.Byte[]): number[]
        isComplete(): boolean
        unwrap(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
        wrap(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
        getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
        dispose(): void
      }

    }
  }
}
