declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace rcache {
                    class AuthTimeWithHash extends sun.security.krb5.internal.rcache.AuthTime implements java.lang.Comparable<sun.security.krb5.internal.rcache.AuthTimeWithHash> {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: java.lang.String | string)
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public toString(): string
                        public compareTo(arg0: sun.security.krb5.internal.rcache.AuthTimeWithHash): int
                        public isSameIgnoresHash(arg0: sun.security.krb5.internal.rcache.AuthTime): boolean
                        public encode(arg0: boolean): byte[]
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}