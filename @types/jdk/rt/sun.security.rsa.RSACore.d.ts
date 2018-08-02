declare namespace sun {
    namespace security {
        namespace rsa {
class RSACore {
    public static getByteLength(arg0: java.math.BigInteger): int
    public static getByteLength(arg0: java.security.interfaces.RSAKey | java.security.interfaces.RSAKey$$Lambda): int
    public static convert(arg0: byte[], arg1: int, arg2: int): byte[]
    public static rsa(arg0: byte[], arg1: java.security.interfaces.RSAPublicKey): byte[]
    public static rsa(arg0: byte[], arg1: java.security.interfaces.RSAPrivateKey): byte[]
    public static rsa(arg0: byte[], arg1: java.security.interfaces.RSAPrivateKey, arg2: boolean): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}