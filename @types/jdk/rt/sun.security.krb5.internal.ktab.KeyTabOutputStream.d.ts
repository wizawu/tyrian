declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ktab {
                    class KeyTabOutputStream extends sun.security.krb5.internal.util.KrbDataOutputStream implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public version: int
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                        public writeVersion(arg0: int): void
                        public writeEntry(arg0: sun.security.krb5.internal.ktab.KeyTabEntry): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}