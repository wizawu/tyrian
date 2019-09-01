declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class PBEKey implements javax.crypto.SecretKey {
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public destroy(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}