declare namespace java {
  namespace security {
    class KeyStore$SecretKeyEntry implements java.security.KeyStore$Entry {
      public constructor(arg0: javax.crypto.SecretKey)
      public constructor(arg0: javax.crypto.SecretKey, arg1: java.util.Set<java.security.KeyStore$Entry$Attribute>)
      public getSecretKey(): javax.crypto.SecretKey
      public getAttributes(): java.util.Set<java.security.KeyStore$Entry$Attribute>
      public toString(): java.lang.String
    }
  }
}
