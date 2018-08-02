declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace ccache {
                    class Credentials {
                        public isEncInSKey: boolean
                        public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: boolean, arg8: sun.security.krb5.internal.TicketFlags, arg9: sun.security.krb5.internal.HostAddresses, arg10: sun.security.krb5.internal.AuthorizationData, arg11: sun.security.krb5.internal.Ticket, arg12: sun.security.krb5.internal.Ticket)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.internal.AuthorizationData, arg3: boolean)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep, arg1: sun.security.krb5.internal.Ticket)
                        public isValid(): boolean
                        public getServicePrincipal(): sun.security.krb5.PrincipalName
                        public setKrbCreds(): sun.security.krb5.Credentials
                        public getStartTime(): sun.security.krb5.internal.KerberosTime
                        public getAuthTime(): sun.security.krb5.internal.KerberosTime
                        public getEndTime(): sun.security.krb5.internal.KerberosTime
                        public getRenewTill(): sun.security.krb5.internal.KerberosTime
                        public getTicketFlags(): sun.security.krb5.internal.TicketFlags
                        public getEType(): int
                        public getTktEType(): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}