declare namespace java {
    namespace security {
        class SecureRandom extends java.util.Random {
            public constructor()
            public constructor(arg0: byte[])
            protected constructor(arg0: java.security.SecureRandomSpi, arg1: java.security.Provider)
            public static getInstance(arg0: java.lang.String | string): java.security.SecureRandom
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.SecureRandom
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.SecureRandom
            public getProvider(): java.security.Provider
            public getAlgorithm(): string
            public setSeed(arg0: byte[]): void
            public setSeed(arg0: long): void
            public nextBytes(arg0: byte[]): void
            protected next(arg0: int): int
            public static getSeed(arg0: int): byte[]
            public generateSeed(arg0: int): byte[]
            public static getInstanceStrong(): java.security.SecureRandom
            public static class: java.lang.Class<any>
        }
    }
}