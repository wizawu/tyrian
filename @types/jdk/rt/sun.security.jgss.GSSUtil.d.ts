declare namespace sun {
    namespace security {
        namespace jgss {
            class GSSUtil {
                public static GSS_KRB5_MECH_OID: org.ietf.jgss.Oid
                public static GSS_KRB5_MECH_OID2: org.ietf.jgss.Oid
                public static GSS_KRB5_MECH_OID_MS: org.ietf.jgss.Oid
                public static GSS_SPNEGO_MECH_OID: org.ietf.jgss.Oid
                public static NT_GSS_KRB5_PRINCIPAL: org.ietf.jgss.Oid
                public constructor()
                public static createOid(arg0: java.lang.String | string): org.ietf.jgss.Oid
                public static isSpNegoMech(arg0: org.ietf.jgss.Oid): boolean
                public static isKerberosMech(arg0: org.ietf.jgss.Oid): boolean
                public static getMechStr(arg0: org.ietf.jgss.Oid): string
                public static getSubject(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.GSSCredential): javax.security.auth.Subject
                public static login(arg0: sun.security.jgss.GSSCaller, arg1: org.ietf.jgss.Oid): javax.security.auth.Subject
                public static useSubjectCredsOnly(arg0: sun.security.jgss.GSSCaller): boolean
                public static useMSInterop(): boolean
                public static searchSubject<T extends sun.security.jgss.spi.GSSCredentialSpi>(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: org.ietf.jgss.Oid, arg2: boolean, arg3: java.lang.Class<T>): java.util.Vector<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}