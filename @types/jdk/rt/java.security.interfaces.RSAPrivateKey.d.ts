declare namespace java {
    namespace security {
        namespace interfaces {
interface RSAPrivateKey extends java.security.PrivateKey , java.security.interfaces.RSAKey {
    serialVersionUID: long
    getPrivateExponent(): java.math.BigInteger
}

        }
    }
}