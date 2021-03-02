declare namespace javax {
  namespace crypto {
    namespace spec {

      class DESKeySpec implements java.security.spec.KeySpec {
        public static readonly DES_KEY_LEN: int
        public constructor(arg0: byte[])
        public constructor(arg0: byte[], arg1: number | java.lang.Integer)
        public getKey(): number[]
        public static isParityAdjusted(arg0: byte[], arg1: number | java.lang.Integer): boolean
        public static isWeak(arg0: byte[], arg1: number | java.lang.Integer): boolean
      }

    }
  }
}
