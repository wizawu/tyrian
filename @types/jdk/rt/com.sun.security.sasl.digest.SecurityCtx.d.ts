declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace digest {
interface SecurityCtx {
    wrap(arg0: byte[], arg1: int, arg2: int): byte[]
    unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
}

                }
            }
        }
    }
}