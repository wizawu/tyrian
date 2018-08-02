declare namespace sun {
    namespace security {
        namespace rsa {
class RSAPublicKeyImpl extends sun.security.x509.X509Key implements java.security.interfaces.RSAPublicKey {
    public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger)
    public constructor(arg0: byte[])
    public getAlgorithm(): string
    public getModulus(): java.math.BigInteger
    public getPublicExponent(): java.math.BigInteger
    protected parseKeyBits(): void
    public toString(): string
    protected writeReplace(): java.lang.Object
}

        }
    }
}