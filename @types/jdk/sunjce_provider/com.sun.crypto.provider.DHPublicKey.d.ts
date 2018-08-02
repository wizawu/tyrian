declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class DHPublicKey implements java.security.PublicKey , javax.crypto.interfaces.DHPublicKey , java.io.Serializable {
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getY(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
            }
        }
    }
}