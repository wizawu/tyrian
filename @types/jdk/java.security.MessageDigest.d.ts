declare namespace java {
  namespace security {
    abstract class MessageDigest extends java.security.MessageDigestSpi {
      protected constructor(arg0: java.lang.String | string)
      public static getInstance(arg0: java.lang.String | string): java.security.MessageDigest
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string
      ): java.security.MessageDigest
      public static getInstance(
        arg0: java.lang.String | string,
        arg1: java.security.Provider
      ): java.security.MessageDigest
      public getProvider(): java.security.Provider
      public update(arg0: number | java.lang.Byte): void
      public update(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public update(arg0: number[] | java.lang.Byte[]): void
      public update(arg0: java.nio.ByteBuffer): void
      public digest(): number[]
      public digest(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public digest(arg0: number[] | java.lang.Byte[]): number[]
      public toString(): java.lang.String
      public static isEqual(arg0: number[] | java.lang.Byte[], arg1: number[] | java.lang.Byte[]): boolean
      public reset(): void
      public getAlgorithm(): java.lang.String
      public getDigestLength(): number
      public clone(): java.lang.Object
    }
  }
}
