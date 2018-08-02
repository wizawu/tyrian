declare namespace sun {
    namespace security {
        namespace validator {
            abstract class Validator {
                public static TYPE_SIMPLE: string
                public static TYPE_PKIX: string
                public static VAR_GENERIC: string
                public static VAR_CODE_SIGNING: string
                public static VAR_JCE_SIGNING: string
                public static VAR_TLS_CLIENT: string
                public static VAR_TLS_SERVER: string
                public static VAR_TSA_SERVER: string
                public static VAR_PLUGIN_CODE_SIGNING: string
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.KeyStore): sun.security.validator.Validator
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Collection<java.security.cert.X509Certificate>): sun.security.validator.Validator
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.cert.PKIXBuilderParameters): sun.security.validator.Validator
                public validate(arg0: java.security.cert.X509Certificate[]): java.security.cert.X509Certificate[]
                public validate(arg0: java.security.cert.X509Certificate[], arg1: java.util.Collection<java.security.cert.X509Certificate>): java.security.cert.X509Certificate[]
                public validate(arg0: java.security.cert.X509Certificate[], arg1: java.util.Collection<java.security.cert.X509Certificate>, arg2: java.lang.Object): java.security.cert.X509Certificate[]
                public validate(arg0: java.security.cert.X509Certificate[], arg1: java.util.Collection<java.security.cert.X509Certificate>, arg2: java.security.AlgorithmConstraints, arg3: java.lang.Object): java.security.cert.X509Certificate[]
                public getTrustedCertificates(): java.util.Collection<java.security.cert.X509Certificate>
                public setValidationDate(arg0: java.util.Date): void
                public static class: java.lang.Class<any>
            }
        }
    }
}