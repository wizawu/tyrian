declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace digest {
                    class DigestMD5Base$DigestIntegrity implements com.sun.security.sasl.digest.SecurityCtx {
                        protected myKi: byte[]
                        protected peerKi: byte[]
                        protected mySeqNum: int
                        protected peerSeqNum: int
                        protected messageType: byte[]
                        protected sequenceNum: byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        protected getHMAC(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int, arg4: int): byte[]
                        protected incrementSeqNum(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}