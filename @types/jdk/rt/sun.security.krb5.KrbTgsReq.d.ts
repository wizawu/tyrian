declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbTgsReq {
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.PrincipalName)
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName)
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.PAData)
                public send(): void
                public getReply(): sun.security.krb5.KrbTgsRep
                public sendAndGetCreds(): sun.security.krb5.Credentials
                public static class: java.lang.Class<any>
            }
        }
    }
}