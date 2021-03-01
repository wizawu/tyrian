declare namespace javax {
  namespace crypto {
    namespace spec {

      class DESKeySpec implements java.security.spec.KeySpec {

        public static readonly DES_KEY_LEN: int
        public constructor(arg0: byte[])
        public constructor(arg0: byte[], arg1: int)
        public getKey(): byte[]
        public static isParityAdjusted(arg0: byte[], arg1: int): boolean
        public static isWeak(arg0: byte[], arg1: int): boolean
      }

    }
  }
}
