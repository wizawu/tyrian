declare namespace javax {
    namespace crypto {
        namespace spec {
class RC5ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
    public constructor(arg0: int, arg1: int, arg2: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: byte[])
    public constructor(arg0: int, arg1: int, arg2: int, arg3: byte[], arg4: int)
    public getVersion(): int
    public getRounds(): int
    public getWordSize(): int
    public getIV(): byte[]
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}