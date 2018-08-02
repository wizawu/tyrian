declare namespace sun {
    namespace security {
        namespace rsa {
class RSAPadding {
    public static PAD_BLOCKTYPE_1: int
    public static PAD_BLOCKTYPE_2: int
    public static PAD_NONE: int
    public static PAD_OAEP_MGF1: int
    public static getInstance(arg0: int, arg1: int): sun.security.rsa.RSAPadding
    public static getInstance(arg0: int, arg1: int, arg2: java.security.SecureRandom): sun.security.rsa.RSAPadding
    public static getInstance(arg0: int, arg1: int, arg2: java.security.SecureRandom, arg3: javax.crypto.spec.OAEPParameterSpec): sun.security.rsa.RSAPadding
    public getMaxDataSize(): int
    public pad(arg0: byte[], arg1: int, arg2: int): byte[]
    public pad(arg0: byte[]): byte[]
    public unpad(arg0: byte[], arg1: int, arg2: int): byte[]
    public unpad(arg0: byte[]): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}