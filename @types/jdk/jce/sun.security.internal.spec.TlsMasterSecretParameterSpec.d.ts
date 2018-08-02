declare namespace sun {
    namespace security {
        namespace internal {
            namespace spec {
                class TlsMasterSecretParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: java.lang.String | string, arg6: int, arg7: int)
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: java.lang.String | string, arg5: int, arg6: int)
                    public getPremasterSecret(): javax.crypto.SecretKey
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getClientRandom(): byte[]
                    public getServerRandom(): byte[]
                    public getExtendedMasterSecretSessionHash(): byte[]
                    public getPRFHashAlg(): string
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}