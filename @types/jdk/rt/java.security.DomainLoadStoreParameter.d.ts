declare namespace java {
    namespace security {
        class DomainLoadStoreParameter implements java.security.KeyStore$LoadStoreParameter {
            public constructor(arg0: java.net.URI, arg1: java.util.Map<java.lang.String, java.security.KeyStore$ProtectionParameter>)
            public getConfiguration(): java.net.URI
            public getProtectionParams(): java.util.Map<java.lang.String, java.security.KeyStore$ProtectionParameter>
            public getProtectionParameter(): java.security.KeyStore$ProtectionParameter
            public static class: java.lang.Class<any>
        }
    }
}