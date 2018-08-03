declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class DHPrivateKey implements java.security.PrivateKey , javax.crypto.interfaces.DHPrivateKey , java.io.Serializable {
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getX(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}