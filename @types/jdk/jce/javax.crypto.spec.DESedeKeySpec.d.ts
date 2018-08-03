declare namespace javax {
    namespace crypto {
        namespace spec {
            class DESedeKeySpec implements java.security.spec.KeySpec {
                public static readonly DES_EDE_KEY_LEN: int
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int)
                public getKey(): byte[]
                public static isParityAdjusted(arg0: byte[], arg1: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}