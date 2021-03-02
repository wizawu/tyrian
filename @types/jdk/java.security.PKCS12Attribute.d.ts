declare namespace java {
  namespace security {

    class PKCS12Attribute implements java.security.KeyStore$Entry$Attribute {
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: byte[])
      public getName(): java.lang.String
      public getValue(): java.lang.String
      public getEncoded(): byte[]
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
