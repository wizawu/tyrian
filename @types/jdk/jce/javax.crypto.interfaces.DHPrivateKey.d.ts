declare namespace javax {
    namespace crypto {
        namespace interfaces {
            interface DHPrivateKey extends javax.crypto.interfaces.DHKey , java.security.PrivateKey {
                serialVersionUID: long
                getX(): java.math.BigInteger
            }
        }
    }
}