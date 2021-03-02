declare namespace java {
  namespace security {

    class SignedObject implements java.io.Serializable {
      public constructor(arg0: java.io.Serializable, arg1: java.security.PrivateKey, arg2: java.security.Signature)
      public getObject(): java.lang.Object
      public getSignature(): byte[]
      public getAlgorithm(): java.lang.String
      public verify(arg0: java.security.PublicKey, arg1: java.security.Signature): boolean
    }

  }
}
