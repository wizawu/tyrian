declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class Secmod$KeyStoreLoadParameter implements java.security.KeyStore$LoadStoreParameter {
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: char[])
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: java.security.KeyStore$ProtectionParameter)
                public getProtectionParameter(): java.security.KeyStore$ProtectionParameter
                public getTrustType(): sun.security.pkcs11.Secmod$TrustType
                public static class: java.lang.Class<any>
            }
            class Secmod$KeyStoreLoadParameter$$Lambda implements java.security.KeyStore$LoadStoreParameter {
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: char[])
            }
        }
    }
}