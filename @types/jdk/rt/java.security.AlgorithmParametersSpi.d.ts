declare namespace java {
    namespace security {
        abstract class AlgorithmParametersSpi {
            public constructor()
            protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
            protected engineInit(arg0: byte[]): void
            protected engineInit(arg0: byte[], arg1: java.lang.String | string): void
            protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
            protected engineGetEncoded(): byte[]
            protected engineGetEncoded(arg0: java.lang.String | string): byte[]
            protected engineToString(): string
            public static class: java.lang.Class<any>
        }
    }
}