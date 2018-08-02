declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_X9_42_DH1_DERIVE_PARAMS {
                    public kdf: long
                    public pOtherInfo: byte[]
                    public pPublicData: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}