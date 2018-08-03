declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace util {
                    abstract class AbstractSaslImpl {
                        protected completed: boolean
                        protected privacy: boolean
                        protected integrity: boolean
                        protected qop: byte[]
                        protected allQop: byte
                        protected strength: byte[]
                        protected sendMaxBufSize: int
                        protected recvMaxBufSize: int
                        protected rawSendSize: int
                        protected myClassName: string
                        protected static readonly MAX_SEND_BUF: string
                        protected static readonly logger: java.util.logging.Logger
                        protected static readonly NO_PROTECTION: byte
                        protected static readonly INTEGRITY_ONLY_PROTECTION: byte
                        protected static readonly PRIVACY_PROTECTION: byte
                        protected static readonly LOW_STRENGTH: byte
                        protected static readonly MEDIUM_STRENGTH: byte
                        protected static readonly HIGH_STRENGTH: byte
                        protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string)
                        public isComplete(): boolean
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        protected static combineMasks(arg0: byte[]): byte
                        protected static findPreferredMask(arg0: byte, arg1: byte[]): byte
                        protected static parseQop(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: boolean): byte[]
                        protected static traceOutput(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[]): void
                        protected static traceOutput(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[], arg4: int, arg5: int): void
                        protected static networkByteOrderToInt(arg0: byte[], arg1: int, arg2: int): int
                        protected static intToNetworkByteOrder(arg0: int, arg1: byte[], arg2: int, arg3: int): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}