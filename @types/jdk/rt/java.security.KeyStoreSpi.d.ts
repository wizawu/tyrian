declare namespace java {
    namespace security {
        abstract class KeyStoreSpi {
            public constructor()
            public abstract engineGetKey(arg0: java.lang.String | string, arg1: char[]): java.security.Key
            public abstract engineGetCertificateChain(arg0: java.lang.String | string): java.security.cert.Certificate[]
            public abstract engineGetCertificate(arg0: java.lang.String | string): java.security.cert.Certificate
            public abstract engineGetCreationDate(arg0: java.lang.String | string): java.util.Date
            public abstract engineSetKeyEntry(arg0: java.lang.String | string, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
            public abstract engineSetKeyEntry(arg0: java.lang.String | string, arg1: byte[], arg2: java.security.cert.Certificate[]): void
            public abstract engineSetCertificateEntry(arg0: java.lang.String | string, arg1: java.security.cert.Certificate): void
            public abstract engineDeleteEntry(arg0: java.lang.String | string): void
            public abstract engineAliases(): java.util.Enumeration<java.lang.String>
            public abstract engineContainsAlias(arg0: java.lang.String | string): boolean
            public abstract engineSize(): int
            public abstract engineIsKeyEntry(arg0: java.lang.String | string): boolean
            public abstract engineIsCertificateEntry(arg0: java.lang.String | string): boolean
            public abstract engineGetCertificateAlias(arg0: java.security.cert.Certificate): string
            public abstract engineStore(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: char[]): void
            public engineStore(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$Lambda): void
            public abstract engineLoad(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: char[]): void
            public engineLoad(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter$$Lambda): void
            public engineGetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
            public engineSetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry$$Lambda, arg2: java.security.KeyStore$ProtectionParameter): void
            public engineEntryInstanceOf(arg0: java.lang.String | string, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
            public static class: java.lang.Class<any>
        }
    }
}