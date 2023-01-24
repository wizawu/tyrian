declare namespace java {
  namespace security {
    class SecureRandom extends java.util.Random {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: number[] | java.lang.Byte[])
      protected constructor(arg0: java.security.SecureRandomSpi, arg1: java.security.Provider)
      public static getInstance(arg0: java.lang.String | string): java.security.SecureRandom
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): java.security.SecureRandom
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.Provider
      ): java.security.SecureRandom
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.SecureRandomParameters
      ): java.security.SecureRandom
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.SecureRandomParameters,
        arg2: java.lang.String | string
      ): java.security.SecureRandom
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.SecureRandomParameters,
        arg2: java.security.Provider
      ): java.security.SecureRandom
      public getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public toString(): java.lang.String
      public getParameters(): java.security.SecureRandomParameters
      public setSeed(arg0: number[] | java.lang.Byte[]): void
      public setSeed(arg0: number | java.lang.Long): void
      public nextBytes(arg0: number[] | java.lang.Byte[]): void
      public nextBytes(arg0: number[] | java.lang.Byte[], arg1: java.security.SecureRandomParameters): void
      protected next(arg0: number | java.lang.Integer): number
      public static getSeed(arg0: number | java.lang.Integer): number[]
      public generateSeed(arg0: number | java.lang.Integer): number[]
      public static getInstanceStrong(): java.security.SecureRandom
      public reseed(): void
      public reseed(arg0: java.security.SecureRandomParameters): void
    }
  }
}
