declare namespace sun {
    namespace security {
        namespace internal {
            namespace spec {
                class TlsPrfParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: java.lang.String | string, arg2: byte[], arg3: int, arg4: java.lang.String | string, arg5: int, arg6: int)
                    public getSecret(): javax.crypto.SecretKey
                    public getLabel(): string
                    public getSeed(): byte[]
                    public getOutputLength(): int
                    public getPRFHashAlg(): string
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}