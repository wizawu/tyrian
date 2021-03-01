declare namespace javax {
  namespace security {
    namespace auth {
      namespace kerberos {

        class EncryptionKey implements javax.crypto.SecretKey {

          public constructor(arg0: byte[], arg1: int)
          public getKeyType(): int
          public getAlgorithm(): java.lang.String
          public getFormat(): java.lang.String
          public getEncoded(): byte[]
          public destroy(): void
          public isDestroyed(): boolean
          public toString(): java.lang.String
          public hashCode(): int
          public equals(arg0: java.lang.Object): boolean
        }

      }
    }
  }
}
