declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace rcache {
                    class AuthTime {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int)
                        public toString(): string
                        public static readFrom(arg0: java.nio.channels.SeekableByteChannel): sun.security.krb5.internal.rcache.AuthTime
                        protected encode0(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
                        public encode(arg0: boolean): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}