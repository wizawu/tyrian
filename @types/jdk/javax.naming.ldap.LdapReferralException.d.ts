declare namespace javax {
  namespace naming {
    namespace ldap {

      abstract class LdapReferralException extends javax.naming.ReferralException {
        protected constructor(arg0: java.lang.String)
        protected constructor()
        public abstract getReferralContext(): javax.naming.Context
        public abstract getReferralContext(arg0: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        public abstract getReferralContext(arg0: java.util.Hashtable<unknown,unknown>, arg1: javax.naming.ldap.Control[]): javax.naming.Context
      }

    }
  }
}
