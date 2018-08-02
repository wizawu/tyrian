declare namespace java {
    namespace security {
abstract class SignatureSpi {
    protected appRandom: java.security.SecureRandom
    public constructor()
    protected engineInitVerify(arg0: java.security.PublicKey): void
    protected engineInitSign(arg0: java.security.PrivateKey): void
    protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineUpdate(arg0: java.nio.ByteBuffer): void
    protected engineSign(): byte[]
    protected engineSign(arg0: byte[], arg1: int, arg2: int): int
    protected engineVerify(arg0: byte[]): boolean
    protected engineVerify(arg0: byte[], arg1: int, arg2: int): boolean
    protected engineSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
    protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
    protected engineGetParameters(): java.security.AlgorithmParameters
    protected engineGetParameter(arg0: java.lang.String | string): java.lang.Object
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}