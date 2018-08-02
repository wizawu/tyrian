declare namespace java {
    namespace security {
        namespace interfaces {
interface DSAParams {
    getP(): java.math.BigInteger
    getQ(): java.math.BigInteger
    getG(): java.math.BigInteger
}

        }
    }
}