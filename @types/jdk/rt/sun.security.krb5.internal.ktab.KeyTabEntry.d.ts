declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ktab {
                    class KeyTabEntry implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Realm, arg2: sun.security.krb5.internal.KerberosTime, arg3: int, arg4: int, arg5: byte[])
                        public getService(): sun.security.krb5.PrincipalName
                        public getKey(): sun.security.krb5.EncryptionKey
                        public getKeyString(): string
                        public entryLength(): int
                        public getTimeStamp(): sun.security.krb5.internal.KerberosTime
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}