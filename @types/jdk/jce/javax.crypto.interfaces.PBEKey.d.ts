declare namespace javax {
    namespace crypto {
        namespace interfaces {
            interface PBEKey extends javax.crypto.SecretKey {
                serialVersionUID: long
                getPassword(): char[]
                getSalt(): byte[]
                getIterationCount(): int
            }
        }
    }
}