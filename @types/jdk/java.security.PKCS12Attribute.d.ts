declare namespace java {
  namespace security {

    class PKCS12Attribute implements java.security.KeyStore$Entry$Attribute {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: byte[])
      public getName(): java.lang.String
      public getValue(): java.lang.String
      public getEncoded(): number[]
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
