declare namespace sun {
    namespace security {
        namespace util {
            class HostnameChecker {
                public static TYPE_TLS: byte
                public static TYPE_LDAP: byte
                public static getInstance(arg0: byte): sun.security.util.HostnameChecker
                public match(arg0: java.lang.String | string, arg1: java.security.cert.X509Certificate): void
                public static match(arg0: java.lang.String | string, arg1: java.security.Principal): boolean
                public static getServerName(arg0: java.security.Principal): string
                public static getSubjectX500Name(arg0: java.security.cert.X509Certificate): sun.security.x509.X500Name
                public static class: java.lang.Class<any>
            }
        }
    }
}