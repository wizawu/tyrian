declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class Des {
                        public constructor()
                        public static set_parity(arg0: byte[]): byte[]
                        public static set_parity(arg0: long): long
                        public static bad_key(arg0: long): boolean
                        public static bad_key(arg0: byte[]): boolean
                        public static octet2long(arg0: byte[]): long
                        public static octet2long(arg0: byte[], arg1: int): long
                        public static long2octet(arg0: long): byte[]
                        public static long2octet(arg0: long, arg1: byte[]): void
                        public static long2octet(arg0: long, arg1: byte[], arg2: int): void
                        public static cbc_encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: byte[], arg4: boolean): void
                        public static char_to_key(arg0: char[]): long
                        public static des_cksum(arg0: byte[], arg1: byte[], arg2: byte[]): byte[]
                        public static string_to_key_bytes(arg0: char[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}