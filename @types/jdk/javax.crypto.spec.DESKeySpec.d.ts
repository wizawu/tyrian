declare namespace javax {
  namespace crypto {
    namespace spec {

      class DESKeySpec implements java.security.spec.KeySpec {
        public static readonly DES_KEY_LEN: int
        public constructor(arg0: number[] | java.lang.Byte[])
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer)
        public getKey(): number[]
        public static isParityAdjusted(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): boolean
        public static isWeak(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): boolean
      }

    }
  }
}
