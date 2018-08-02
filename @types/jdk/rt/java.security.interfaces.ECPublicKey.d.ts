declare namespace java {
    namespace security {
        namespace interfaces {
interface ECPublicKey extends java.security.PublicKey , java.security.interfaces.ECKey {
    serialVersionUID: long
    getW(): java.security.spec.ECPoint
}

        }
    }
}