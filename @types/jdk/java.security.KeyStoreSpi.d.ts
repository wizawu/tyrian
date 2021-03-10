declare namespace java {
  namespace security {

    abstract class KeyStoreSpi {
      public constructor()
      public abstract engineGetKey(arg0: java.lang.String | string, arg1: string[] | java.lang.Character[]): java.security.Key
      public abstract engineGetCertificateChain(arg0: java.lang.String | string): java.security.cert.Certificate[]
      public abstract engineGetCertificate(arg0: java.lang.String | string): java.security.cert.Certificate
      public abstract engineGetCreationDate(arg0: java.lang.String | string): java.util.Date
      public abstract engineSetKeyEntry(arg0: java.lang.String | string, arg1: java.security.Key, arg2: string[] | java.lang.Character[], arg3: java.security.cert.Certificate[]): void
      public abstract engineSetKeyEntry(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[], arg2: java.security.cert.Certificate[]): void
      public abstract engineSetCertificateEntry(arg0: java.lang.String | string, arg1: java.security.cert.Certificate): void
      public abstract engineDeleteEntry(arg0: java.lang.String | string): void
      public abstract engineAliases(): java.util.Enumeration<java.lang.String>
      public abstract engineContainsAlias(arg0: java.lang.String | string): boolean
      public abstract engineSize(): number
      public abstract engineIsKeyEntry(arg0: java.lang.String | string): boolean
      public abstract engineIsCertificateEntry(arg0: java.lang.String | string): boolean
      public abstract engineGetCertificateAlias(arg0: java.security.cert.Certificate): java.lang.String
      public abstract engineStore(arg0: java.io.OutputStream, arg1: string[] | java.lang.Character[]): void
      public engineStore(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda): void
      public abstract engineLoad(arg0: java.io.InputStream, arg1: string[] | java.lang.Character[]): void
      public engineLoad(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda): void
      engineLoad(arg0: java.io.InputStream, arg1: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$lambda): void
      public engineGetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
      public engineSetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry$$lambda, arg2: java.security.KeyStore$ProtectionParameter): void
      public engineEntryInstanceOf(arg0: java.lang.String | string, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
      public engineProbe(arg0: java.io.InputStream): boolean
    }

  }
}
