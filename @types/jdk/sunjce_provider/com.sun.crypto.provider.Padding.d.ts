declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                interface Padding {
                    padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    unpad(arg0: byte[], arg1: int, arg2: int): int
                    padLength(arg0: int): int
                }
            }
        }
    }
}