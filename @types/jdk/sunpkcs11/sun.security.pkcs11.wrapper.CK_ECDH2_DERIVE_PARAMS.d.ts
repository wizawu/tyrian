declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
class CK_ECDH2_DERIVE_PARAMS {
    public kdf: long
    public pSharedData: byte[]
    public pPublicData: byte[]
    public ulPrivateDataLen: long
    public hPrivateData: long
    public pPublicData2: byte[]
    public constructor()
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}