declare namespace java {
    namespace security {
        abstract class AlgorithmParametersSpi {
            public constructor()
            protected abstract engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
            protected abstract engineInit(arg0: byte[]): void
            protected abstract engineInit(arg0: byte[], arg1: java.lang.String | string): void
            protected abstract engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
            protected abstract engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
            protected abstract engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.String | string): byte[]
            protected abstract engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
            public static class: java.lang.Class<any>
        }
    }
}