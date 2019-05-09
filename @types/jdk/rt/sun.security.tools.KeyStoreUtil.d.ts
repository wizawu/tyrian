declare namespace sun {
    namespace security {
        namespace tools {
            class KeyStoreUtil {
                public static isSelfSigned(arg0: java.security.cert.X509Certificate): boolean
                public static signedBy(arg0: java.security.cert.X509Certificate, arg1: java.security.cert.X509Certificate): boolean
                public static isWindowsKeyStore(arg0: java.lang.String | string): boolean
                public static niceStoreTypeName(arg0: java.lang.String | string): string
                public static getCacertsKeyStore(): java.security.KeyStore
                public static getPassWithModifier(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.ResourceBundle): char[]
                public static class: java.lang.Class<any>
            }
        }
    }
}