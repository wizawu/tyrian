declare namespace java {
    namespace security {
        namespace interfaces {
            interface DSAPublicKey extends java.security.interfaces.DSAKey , java.security.PublicKey {
                serialVersionUID: long
                getY(): java.math.BigInteger
            }
            interface DSAPublicKey$$Lambda extends java.security.interfaces.DSAKey , java.security.PublicKey {
                serialVersionUID: long
            }
        }
    }
}