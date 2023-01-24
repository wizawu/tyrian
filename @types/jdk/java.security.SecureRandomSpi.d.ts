declare namespace java {
  namespace security {
    abstract class SecureRandomSpi implements java.io.Serializable {
      public constructor()
      protected constructor(arg0: java.security.SecureRandomParameters)
      protected abstract engineSetSeed(arg0: number[] | java.lang.Byte[]): void
      protected abstract engineNextBytes(arg0: number[] | java.lang.Byte[]): void
      protected engineNextBytes(arg0: number[] | java.lang.Byte[], arg1: java.security.SecureRandomParameters): void
      protected abstract engineGenerateSeed(arg0: number | java.lang.Integer): number[]
      protected engineReseed(arg0: java.security.SecureRandomParameters): void
      protected engineGetParameters(): java.security.SecureRandomParameters
      public toString(): java.lang.String
    }
  }
}
