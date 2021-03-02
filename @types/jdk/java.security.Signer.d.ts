declare namespace java {
  namespace security {

    abstract class Signer extends java.security.Identity {
      protected constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.security.IdentityScope)
      public getPrivateKey(): java.security.PrivateKey
      public setKeyPair(arg0: java.security.KeyPair): void
      printKeys(): java.lang.String
      public toString(): java.lang.String
    }

  }
}
