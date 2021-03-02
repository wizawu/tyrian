declare namespace javax {
  namespace security {
    namespace auth {
      namespace x500 {

        class X500Principal implements java.security.Principal, java.io.Serializable {
          public static readonly RFC1779: java.lang.String
          public static readonly RFC2253: java.lang.String
          public static readonly CANONICAL: java.lang.String
          constructor(arg0: sun.security.x509.X500Name)
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String,java.lang.String>)
          public constructor(arg0: byte[])
          public constructor(arg0: java.io.InputStream)
          public getName(): java.lang.String
          public getName(arg0: java.lang.String | string): java.lang.String
          public getName(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String,java.lang.String>): java.lang.String
          public getEncoded(): number[]
          public toString(): java.lang.String
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
        }

      }
    }
  }
}
