declare namespace sun {
    namespace security {
        namespace internal {
            namespace spec {
class TlsKeyMaterialParameterSpec implements java.security.spec.AlgorithmParameterSpec {
    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: java.lang.String | string, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.lang.String | string, arg11: int, arg12: int)
    public getMasterSecret(): javax.crypto.SecretKey
    public getMajorVersion(): int
    public getMinorVersion(): int
    public getClientRandom(): byte[]
    public getServerRandom(): byte[]
    public getCipherAlgorithm(): string
    public getCipherKeyLength(): int
    public getExpandedCipherKeyLength(): int
    public getIvLength(): int
    public getMacKeyLength(): int
    public getPRFHashAlg(): string
    public getPRFHashLength(): int
    public getPRFBlockSize(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}