declare namespace javax {
  namespace naming {

    abstract class ReferralException extends javax.naming.NamingException {
      protected constructor(arg0: java.lang.String | string)
      protected constructor()
      public abstract getReferralInfo(): java.lang.Object
      public abstract getReferralContext(): javax.naming.Context
      public abstract getReferralContext(arg0: java.util.Hashtable<unknown,unknown>): javax.naming.Context
      public abstract skipReferral(): boolean
      public abstract retryReferral(): void
    }

  }
}
