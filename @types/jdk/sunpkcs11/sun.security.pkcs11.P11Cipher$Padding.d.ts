declare namespace sun {
    namespace security {
        namespace pkcs11 {
            interface P11Cipher$Padding {
                setPaddingBytes(arg0: byte[], arg1: int): int
                unpad(arg0: byte[], arg1: int): int
            }
        }
    }
}