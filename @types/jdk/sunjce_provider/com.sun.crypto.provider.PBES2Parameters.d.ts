declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
abstract class PBES2Parameters extends java.security.AlgorithmParametersSpi {
    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
    protected engineInit(arg0: byte[]): void
    protected engineInit(arg0: byte[], arg1: java.lang.String | string): void
    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.String | string): byte[]
    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}