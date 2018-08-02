declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace util {
                    class PolicyUtils {
                        public static NOPLAINTEXT: int
                        public static NOACTIVE: int
                        public static NODICTIONARY: int
                        public static FORWARD_SECRECY: int
                        public static NOANONYMOUS: int
                        public static PASS_CREDENTIALS: int
                        public static checkPolicy(arg0: int, arg1: java.util.Map<java.lang.String, any>): boolean
                        public static filterMechs(arg0: java.lang.String[], arg1: int[], arg2: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}