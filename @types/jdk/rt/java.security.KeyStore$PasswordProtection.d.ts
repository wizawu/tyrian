declare namespace java {
    namespace security {
        class KeyStore$PasswordProtection implements java.security.KeyStore$ProtectionParameter , javax.security.auth.Destroyable {
            public constructor(arg0: char[])
            public constructor(arg0: char[], arg1: java.lang.String | string, arg2: java.security.spec.AlgorithmParameterSpec)
            public getProtectionAlgorithm(): string
            public getProtectionParameters(): java.security.spec.AlgorithmParameterSpec
            public getPassword(): char[]
            public destroy(): void
            public isDestroyed(): boolean
            public static class: java.lang.Class<any>
        }
    }
}