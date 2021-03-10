declare namespace javax {
  namespace crypto {
    namespace spec {

      class DESedeKeySpec implements java.security.spec.KeySpec {
        public static readonly DES_EDE_KEY_LEN: int
        public constructor(arg0: number[] | java.lang.Byte[])
        public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer)
        public getKey(): number[]
        public static isParityAdjusted(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): boolean
      }

    }
  }
}
