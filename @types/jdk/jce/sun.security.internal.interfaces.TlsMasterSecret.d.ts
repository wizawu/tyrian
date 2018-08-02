declare namespace sun {
    namespace security {
        namespace internal {
            namespace interfaces {
interface TlsMasterSecret extends javax.crypto.SecretKey {
    serialVersionUID: long
    getMajorVersion(): int
    getMinorVersion(): int
}

            }
        }
    }
}