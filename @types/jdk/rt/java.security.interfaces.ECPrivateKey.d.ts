declare namespace java {
    namespace security {
        namespace interfaces {
            interface ECPrivateKey extends java.security.PrivateKey , java.security.interfaces.ECKey {
                serialVersionUID: long
                getS(): java.math.BigInteger
            }
            interface ECPrivateKey$$Lambda extends java.security.PrivateKey , java.security.interfaces.ECKey {
                serialVersionUID: long
            }
        }
    }
}