declare namespace javax {
    namespace crypto {
        namespace spec {
class PBEKeySpec implements java.security.spec.KeySpec {
    public constructor(arg0: char[])
    public constructor(arg0: char[], arg1: byte[], arg2: int, arg3: int)
    public constructor(arg0: char[], arg1: byte[], arg2: int)
    public clearPassword(): void
    public getPassword(): char[]
    public getSalt(): byte[]
    public getIterationCount(): int
    public getKeyLength(): int
    public static class: java.lang.Class<any>
}

        }
    }
}