declare namespace java {
  namespace security {

    class SecureRandom extends java.util.Random {

      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: byte[])
      protected constructor(arg0: java.security.SecureRandomSpi, arg1: java.security.Provider)
      public static getInstance(arg0: java.lang.String): java.security.SecureRandom
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.SecureRandom
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.SecureRandom
      public static getInstance(arg0: java.lang.String, arg1: java.security.SecureRandomParameters): java.security.SecureRandom
      public static getInstance(arg0: java.lang.String, arg1: java.security.SecureRandomParameters, arg2: java.lang.String): java.security.SecureRandom
      public static getInstance(arg0: java.lang.String, arg1: java.security.SecureRandomParameters, arg2: java.security.Provider): java.security.SecureRandom
      public readonly getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public toString(): java.lang.String
      public getParameters(): java.security.SecureRandomParameters
      public setSeed(arg0: byte[]): void
      public setSeed(arg0: long): void
      public nextBytes(arg0: byte[]): void
      public nextBytes(arg0: byte[], arg1: java.security.SecureRandomParameters): void
      protected readonly next(arg0: int): int
      public static getSeed(arg0: int): byte[]
      public generateSeed(arg0: int): byte[]
      public static getInstanceStrong(): java.security.SecureRandom
      public reseed(): void
      public reseed(arg0: java.security.SecureRandomParameters): void
    }

  }
}
