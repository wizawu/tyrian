declare namespace sun {
    namespace security {
        namespace rsa {
abstract class RSASignature extends java.security.SignatureSpi {
    protected engineInitVerify(arg0: java.security.PublicKey): void
    protected engineInitSign(arg0: java.security.PrivateKey): void
    protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineUpdate(arg0: java.nio.ByteBuffer): void
    protected engineSign(): byte[]
    protected engineVerify(arg0: byte[]): boolean
    public static encodeSignature(arg0: sun.security.util.ObjectIdentifier, arg1: byte[]): byte[]
    public static decodeSignature(arg0: sun.security.util.ObjectIdentifier, arg1: byte[]): byte[]
    protected engineSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
    protected engineGetParameter(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}