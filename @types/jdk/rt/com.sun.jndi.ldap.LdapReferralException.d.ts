declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
class LdapReferralException extends javax.naming.ldap.LdapReferralException {
    public getReferralContext(): javax.naming.Context
    public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
    public getReferralContext(arg0: java.util.Hashtable<any, any>, arg1: javax.naming.ldap.Control[]): javax.naming.Context
    public getReferralInfo(): java.lang.Object
    public retryReferral(): void
    public skipReferral(): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}