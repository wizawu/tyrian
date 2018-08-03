declare namespace sun {
    namespace security {
        namespace provider {
            class DSAPrivateKey extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.DSAPrivateKey , java.io.Serializable {
                public constructor()
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger)
                public constructor(arg0: byte[])
                public getParams(): java.security.interfaces.DSAParams
                public getX(): java.math.BigInteger
                protected parseKeyBits(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}