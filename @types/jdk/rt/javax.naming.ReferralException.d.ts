declare namespace javax {
    namespace naming {
abstract class ReferralException extends javax.naming.NamingException {
    protected constructor(arg0: java.lang.String | string)
    protected constructor()
    public getReferralInfo(): java.lang.Object
    public getReferralContext(): javax.naming.Context
    public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
    public skipReferral(): boolean
    public retryReferral(): void
    public static class: java.lang.Class<any>
}

    }
}