declare namespace java {
    namespace security {
        namespace spec {
            class DSAParameterSpec implements java.security.spec.AlgorithmParameterSpec , java.security.interfaces.DSAParams {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getP(): java.math.BigInteger
                public getQ(): java.math.BigInteger
                public getG(): java.math.BigInteger
            }
        }
    }
}