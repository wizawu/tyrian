declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
class Aes128 {
    public static stringToKey(arg0: char[], arg1: java.lang.String | string, arg2: byte[]): byte[]
    public static getChecksumLength(): int
    public static calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
    public static encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
    public static encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
    public static decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
    public static decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}