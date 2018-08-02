declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbApRep {
                public constructor(arg0: sun.security.krb5.KrbApReq, arg1: boolean, arg2: sun.security.krb5.EncryptionKey)
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.KrbApReq)
                public getSubKey(): sun.security.krb5.EncryptionKey
                public getSeqNumber(): java.lang.Integer
                public getMessage(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}