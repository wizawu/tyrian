declare namespace java {
  namespace security {

    class KeyStore {

      protected constructor(arg0: java.security.KeyStoreSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public static getInstance(arg0: java.lang.String): java.security.KeyStore
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.KeyStore
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.KeyStore
      public static readonly getDefaultType(): java.lang.String
      public readonly getProvider(): java.security.Provider
      public readonly getType(): java.lang.String
      public readonly getKey(arg0: java.lang.String, arg1: char[]): java.security.Key
      public readonly getCertificateChain(arg0: java.lang.String): java.security.cert.Certificate[]
      public readonly getCertificate(arg0: java.lang.String): java.security.cert.Certificate
      public readonly getCreationDate(arg0: java.lang.String): java.util.Date
      public readonly setKeyEntry(arg0: java.lang.String, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
      public readonly setKeyEntry(arg0: java.lang.String, arg1: byte[], arg2: java.security.cert.Certificate[]): void
      public readonly setCertificateEntry(arg0: java.lang.String, arg1: java.security.cert.Certificate): void
      public readonly deleteEntry(arg0: java.lang.String): void
      public readonly aliases(): java.util.Enumeration<java.lang.String>
      public readonly containsAlias(arg0: java.lang.String): boolean
      public readonly size(): int
      public readonly isKeyEntry(arg0: java.lang.String): boolean
      public readonly isCertificateEntry(arg0: java.lang.String): boolean
      public readonly getCertificateAlias(arg0: java.security.cert.Certificate): java.lang.String
      public readonly store(arg0: java.io.OutputStream, arg1: char[]): void
      public readonly store(arg0: java.security.KeyStore$LoadStoreParameter): void
      public readonly load(arg0: java.io.InputStream, arg1: char[]): void
      public readonly load(arg0: java.security.KeyStore$LoadStoreParameter): void
      public readonly getEntry(arg0: java.lang.String, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
      public readonly setEntry(arg0: java.lang.String, arg1: java.security.KeyStore$Entry, arg2: java.security.KeyStore$ProtectionParameter): void
      public readonly entryInstanceOf(arg0: java.lang.String, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
      public static readonly getInstance(arg0: java.io.File, arg1: char[]): java.security.KeyStore
      public static readonly getInstance(arg0: java.io.File, arg1: java.security.KeyStore$LoadStoreParameter): java.security.KeyStore
    }

  }
}
