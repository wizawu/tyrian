declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_RSA_PKCS_OAEP_PARAMS {
                    public hashAlg: long
                    public mgf: long
                    public source: long
                    public pSourceData: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}