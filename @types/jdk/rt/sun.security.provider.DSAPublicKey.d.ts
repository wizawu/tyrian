declare namespace sun {
    namespace security {
        namespace provider {
            class DSAPublicKey extends sun.security.x509.X509Key implements java.security.interfaces.DSAPublicKey , java.io.Serializable {
                public constructor()
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger)
                public constructor(arg0: byte[])
                public getParams(): java.security.interfaces.DSAParams
                public getY(): java.math.BigInteger
                public toString(): string
                protected parseKeyBits(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}