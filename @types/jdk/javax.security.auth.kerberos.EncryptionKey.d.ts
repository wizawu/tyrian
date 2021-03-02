declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class EncryptionKey implements javax.crypto.SecretKey {
          public constructor(arg0: byte[], arg1: number | java.lang.Integer)
          public getKeyType(): number
          public getAlgorithm(): java.lang.String
          public getFormat(): java.lang.String
          public getEncoded(): number[]
          public destroy(): void
          public isDestroyed(): boolean
          public toString(): java.lang.String
          public hashCode(): number
          public equals(arg0: java.lang.Object | any): boolean
        }

      }
    }
  }
}
