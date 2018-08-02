declare namespace sun {
    namespace security {
        namespace x509 {
            class AlgIdDSA extends sun.security.x509.AlgorithmId implements java.security.interfaces.DSAParams {
                public getP(): java.math.BigInteger
                public getQ(): java.math.BigInteger
                public getG(): java.math.BigInteger
                public constructor()
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: byte[], arg2: byte[])
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getName(): string
                protected decodeParams(): void
                public toString(): string
                protected paramsToString(): string
            }
        }
    }
}