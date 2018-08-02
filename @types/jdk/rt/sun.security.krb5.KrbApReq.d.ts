declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbApReq {
                public constructor(arg0: sun.security.krb5.Credentials, arg1: boolean, arg2: boolean, arg3: boolean, arg4: sun.security.krb5.Checksum)
                public constructor(arg0: byte[], arg1: sun.security.jgss.krb5.Krb5AcceptCredential, arg2: java.net.InetAddress)
                public getCreds(): sun.security.krb5.Credentials
                public getMutualAuthRequired(): boolean
                public getSubKey(): sun.security.krb5.EncryptionKey
                public getSeqNumber(): java.lang.Integer
                public getChecksum(): sun.security.krb5.Checksum
                public getMessage(): byte[]
                public getClient(): sun.security.krb5.PrincipalName
                public static class: java.lang.Class<any>
            }
        }
    }
}