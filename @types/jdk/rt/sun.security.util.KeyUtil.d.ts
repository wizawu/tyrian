declare namespace sun {
    namespace security {
        namespace util {
class KeyUtil {
    public constructor()
    public static getKeySize(arg0: java.security.Key): int
    public static getKeySize(arg0: java.security.AlgorithmParameters): int
    public static validate(arg0: java.security.Key): void
    public static validate(arg0: java.security.spec.KeySpec): void
    public static isOracleJCEProvider(arg0: java.lang.String | string): boolean
    public static checkTlsPreMasterSecretKey(arg0: int, arg1: int, arg2: java.security.SecureRandom, arg3: byte[], arg4: boolean): byte[]
    public static trimZeroes(arg0: byte[]): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}