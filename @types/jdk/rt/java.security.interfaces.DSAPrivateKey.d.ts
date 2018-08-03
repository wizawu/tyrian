declare namespace java {
    namespace security {
        namespace interfaces {
            interface DSAPrivateKey extends java.security.interfaces.DSAKey , java.security.PrivateKey {
                serialVersionUID: long
                getX(): java.math.BigInteger
            }
        }
    }
}