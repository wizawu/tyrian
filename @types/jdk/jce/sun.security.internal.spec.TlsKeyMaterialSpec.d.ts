declare namespace sun {
    namespace security {
        namespace internal {
            namespace spec {
class TlsKeyMaterialSpec implements java.security.spec.KeySpec , javax.crypto.SecretKey {
    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey)
    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey, arg2: javax.crypto.SecretKey, arg3: javax.crypto.SecretKey)
    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey, arg2: javax.crypto.SecretKey, arg3: javax.crypto.spec.IvParameterSpec, arg4: javax.crypto.SecretKey, arg5: javax.crypto.spec.IvParameterSpec)
    public getAlgorithm(): string
    public getFormat(): string
    public getEncoded(): byte[]
    public getClientMacKey(): javax.crypto.SecretKey
    public getServerMacKey(): javax.crypto.SecretKey
    public getClientCipherKey(): javax.crypto.SecretKey
    public getClientIv(): javax.crypto.spec.IvParameterSpec
    public getServerCipherKey(): javax.crypto.SecretKey
    public getServerIv(): javax.crypto.spec.IvParameterSpec
    public static class: java.lang.Class<any>
}

            }
        }
    }
}