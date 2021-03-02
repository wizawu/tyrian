declare namespace java {
  namespace security {

    abstract class MessageDigestSpi {
      public constructor()
      protected engineGetDigestLength(): number
      protected abstract engineUpdate(arg0: number | java.lang.Byte): void
      protected abstract engineUpdate(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      protected engineUpdate(arg0: java.nio.ByteBuffer): void
      protected abstract engineDigest(): number[]
      protected engineDigest(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      protected abstract engineReset(): void
      public clone(): java.lang.Object
    }

  }
}
