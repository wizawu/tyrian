declare namespace sun {
    namespace security {
        namespace provider {
            class JavaKeyStore$DualFormatJKS extends sun.security.provider.KeyStoreDelegator {
                public constructor()
                public engineLoad(arg0: java.io.InputStream, arg1: char[]): void
                public engineStore(arg0: java.io.OutputStream, arg1: char[]): void
                public engineEntryInstanceOf(arg0: java.lang.String | string, arg1: java.lang.Class): boolean
                public engineSetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry$$Lambda, arg2: java.security.KeyStore$ProtectionParameter): void
                public engineGetEntry(arg0: java.lang.String | string, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
                public engineGetCertificateAlias(arg0: java.security.cert.Certificate): string
                public engineIsCertificateEntry(arg0: java.lang.String | string): boolean
                public engineIsKeyEntry(arg0: java.lang.String | string): boolean
                public engineSize(): int
                public engineContainsAlias(arg0: java.lang.String | string): boolean
                public engineAliases(): java.util.Enumeration
                public engineDeleteEntry(arg0: java.lang.String | string): void
                public engineSetCertificateEntry(arg0: java.lang.String | string, arg1: java.security.cert.Certificate): void
                public engineSetKeyEntry(arg0: java.lang.String | string, arg1: byte[], arg2: java.security.cert.Certificate[]): void
                public engineSetKeyEntry(arg0: java.lang.String | string, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
                public engineGetCreationDate(arg0: java.lang.String | string): java.util.Date
                public engineGetCertificate(arg0: java.lang.String | string): java.security.cert.Certificate
                public engineGetCertificateChain(arg0: java.lang.String | string): java.security.cert.Certificate[]
                public engineGetKey(arg0: java.lang.String | string, arg1: char[]): java.security.Key
                public static class: java.lang.Class<any>
            }
        }
    }
}