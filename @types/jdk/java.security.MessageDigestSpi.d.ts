declare namespace java {
  namespace security {

    abstract class MessageDigestSpi {

      public constructor()
      protected engineGetDigestLength(): int
      protected abstract engineUpdate(arg0: byte): void
      protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int): void
      protected engineUpdate(arg0: java.nio.ByteBuffer): void
      protected abstract engineDigest(): byte[]
      protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
      protected abstract engineReset(): void
      public clone(): java.lang.Object
    }

  }
}
