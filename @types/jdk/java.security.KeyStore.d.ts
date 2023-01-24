declare namespace java {
  namespace security {
    class KeyStore {
      protected constructor(
        arg0: java.security.KeyStoreSpi,
        arg1: java.security.Provider,
        arg2: java.lang.String | string
      )
      public static getInstance(arg0: java.lang.String | string): java.security.KeyStore
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): java.security.KeyStore
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.KeyStore
      public static getDefaultType(): java.lang.String
      public getProvider(): java.security.Provider
      public getType(): java.lang.String
      public getKey(arg0: java.lang.String | string, arg1: string[] | java.lang.Character[]): java.security.Key
      public getCertificateChain(arg0: java.lang.String | string): java.security.cert.Certificate[]
      public getCertificate(arg0: java.lang.String | string): java.security.cert.Certificate
      public getCreationDate(arg0: java.lang.String | string): java.util.Date
      public setKeyEntry(
        arg0: java.lang.String | string,
        arg1: java.security.Key,
        arg2: string[] | java.lang.Character[],
        arg3: java.security.cert.Certificate[]
      ): void
      public setKeyEntry(
        arg0: java.lang.String | string,
        arg1: number[] | java.lang.Byte[],
        arg2: java.security.cert.Certificate[]
      ): void
      public setCertificateEntry(arg0: java.lang.String | string, arg1: java.security.cert.Certificate): void
      public deleteEntry(arg0: java.lang.String | string): void
      public aliases(): java.util.Enumeration<java.lang.String>
      public containsAlias(arg0: java.lang.String | string): boolean
      public size(): number
      public isKeyEntry(arg0: java.lang.String | string): boolean
      public isCertificateEntry(arg0: java.lang.String | string): boolean
      public getCertificateAlias(arg0: java.security.cert.Certificate): java.lang.String
      public store(arg0: java.io.OutputStream, arg1: string[] | java.lang.Character[]): void
      public store(
        arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda
      ): void
      public load(arg0: java.io.InputStream, arg1: string[] | java.lang.Character[]): void
      public load(
        arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda
      ): void
      public getEntry(
        arg0: java.lang.String | string,
        arg1: java.security.KeyStore$ProtectionParameter
      ): java.security.KeyStore$Entry
      public setEntry(
        arg0: java.lang.String | string,
        arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry$$lambda,
        arg2: java.security.KeyStore$ProtectionParameter
      ): void
      public entryInstanceOf(
        arg0: java.lang.String | string,
        arg1: java.lang.Class<java.security.KeyStore$Entry>
      ): boolean
      public static getInstance(arg0: java.io.File, arg1: string[] | java.lang.Character[]): java.security.KeyStore
      public static getInstance(
        arg0: java.io.File,
        arg1: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda
      ): java.security.KeyStore
    }
  }
}
