declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace util {
                    class PolicyUtils {
                        public static readonly NOPLAINTEXT: int
                        public static readonly NOACTIVE: int
                        public static readonly NODICTIONARY: int
                        public static readonly FORWARD_SECRECY: int
                        public static readonly NOANONYMOUS: int
                        public static readonly PASS_CREDENTIALS: int
                        public static checkPolicy(arg0: int, arg1: java.util.Map<java.lang.String, any>): boolean
                        public static filterMechs(arg0: java.lang.String[], arg1: int[], arg2: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}