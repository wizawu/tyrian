declare namespace javax {
    namespace naming {
        namespace ldap {
            abstract class LdapReferralException extends javax.naming.ReferralException {
                protected constructor(arg0: java.lang.String | string)
                protected constructor()
                public getReferralContext(): javax.naming.Context
                public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                public getReferralContext(arg0: java.util.Hashtable<any, any>, arg1: javax.naming.ldap.Control[]): javax.naming.Context
                public static class: java.lang.Class<any>
            }
        }
    }
}