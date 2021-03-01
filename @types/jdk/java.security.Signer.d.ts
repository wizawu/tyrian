declare namespace java {
  namespace security {

    abstract class Signer extends java.security.Identity {

      protected constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.security.IdentityScope)
      public getPrivateKey(): java.security.PrivateKey
      public readonly setKeyPair(arg0: java.security.KeyPair): void
      printKeys(): java.lang.String
      public toString(): java.lang.String
    }

  }
}
