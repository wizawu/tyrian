declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_RSA_PKCS_PSS_PARAMS {
                    public hashAlg: long
                    public mgf: long
                    public sLen: long
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}