declare namespace javax {
    namespace crypto {
        namespace interfaces {
            interface DHPublicKey extends javax.crypto.interfaces.DHKey , java.security.PublicKey {
                serialVersionUID: long
                getY(): java.math.BigInteger
            }
            interface DHPublicKey$$Lambda extends javax.crypto.interfaces.DHKey , java.security.PublicKey {
                serialVersionUID: long
            }
        }
    }
}