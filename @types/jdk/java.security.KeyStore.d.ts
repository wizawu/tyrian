declare namespace java {
  namespace security {

    class KeyStore {
      protected constructor(arg0: java.security.KeyStoreSpi, arg1: java.security.Provider, arg2: java.lang.String)
      public static getInstance(arg0: java.lang.String): java.security.KeyStore
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.KeyStore
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.KeyStore
      public static getDefaultType(): java.lang.String
      public getProvider(): java.security.Provider
      public getType(): java.lang.String
      public getKey(arg0: java.lang.String, arg1: char[]): java.security.Key
      public getCertificateChain(arg0: java.lang.String): java.security.cert.Certificate[]
      public getCertificate(arg0: java.lang.String): java.security.cert.Certificate
      public getCreationDate(arg0: java.lang.String): java.util.Date
      public setKeyEntry(arg0: java.lang.String, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
      public setKeyEntry(arg0: java.lang.String, arg1: byte[], arg2: java.security.cert.Certificate[]): void
      public setCertificateEntry(arg0: java.lang.String, arg1: java.security.cert.Certificate): void
      public deleteEntry(arg0: java.lang.String): void
      public aliases(): java.util.Enumeration<java.lang.String>
      public containsAlias(arg0: java.lang.String): boolean
      public size(): int
      public isKeyEntry(arg0: java.lang.String): boolean
      public isCertificateEntry(arg0: java.lang.String): boolean
      public getCertificateAlias(arg0: java.security.cert.Certificate): java.lang.String
      public store(arg0: java.io.OutputStream, arg1: char[]): void
      public store(arg0: java.security.KeyStore$LoadStoreParameter): void
      public load(arg0: java.io.InputStream, arg1: char[]): void
      public load(arg0: java.security.KeyStore$LoadStoreParameter): void
      public getEntry(arg0: java.lang.String, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
      public setEntry(arg0: java.lang.String, arg1: java.security.KeyStore$Entry, arg2: java.security.KeyStore$ProtectionParameter): void
      public entryInstanceOf(arg0: java.lang.String, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
      public static getInstance(arg0: java.io.File, arg1: char[]): java.security.KeyStore
      public static getInstance(arg0: java.io.File, arg1: java.security.KeyStore$LoadStoreParameter): java.security.KeyStore
    }

  }
}
