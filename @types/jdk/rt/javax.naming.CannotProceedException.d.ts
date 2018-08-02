declare namespace javax {
    namespace naming {
class CannotProceedException extends javax.naming.NamingException {
    protected remainingNewName: javax.naming.Name
    protected environment: java.util.Hashtable<any, any>
    protected altName: javax.naming.Name
    protected altNameCtx: javax.naming.Context
    public constructor(arg0: java.lang.String | string)
    public constructor()
    public getEnvironment(): java.util.Hashtable<any, any>
    public setEnvironment(arg0: java.util.Hashtable<any, any>): void
    public getRemainingNewName(): javax.naming.Name
    public setRemainingNewName(arg0: javax.naming.Name): void
    public getAltName(): javax.naming.Name
    public setAltName(arg0: javax.naming.Name): void
    public getAltNameCtx(): javax.naming.Context
    public setAltNameCtx(arg0: javax.naming.Context): void
    public static class: java.lang.Class<any>
}

    }
}