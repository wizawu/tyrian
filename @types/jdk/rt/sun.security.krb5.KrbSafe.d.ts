declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbSafe extends sun.security.krb5.KrbAppMessage {
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.SeqNumber, arg5: sun.security.krb5.internal.HostAddress, arg6: sun.security.krb5.internal.HostAddress)
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.SeqNumber, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddress, arg6: boolean, arg7: boolean)
                public getMessage(): byte[]
                public getData(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}