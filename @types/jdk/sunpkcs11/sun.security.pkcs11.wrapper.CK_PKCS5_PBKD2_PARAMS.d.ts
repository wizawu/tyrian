declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
class CK_PKCS5_PBKD2_PARAMS {
    public saltSource: long
    public pSaltSourceData: byte[]
    public iterations: long
    public prf: long
    public pPrfData: byte[]
    public constructor()
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}