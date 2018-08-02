declare namespace javax {
    namespace naming {
class NamingException extends java.lang.Exception {
    protected resolvedName: javax.naming.Name
    protected resolvedObj: java.lang.Object
    protected remainingName: javax.naming.Name
    protected rootException: java.lang.Throwable
    public constructor(arg0: java.lang.String | string)
    public constructor()
    public getResolvedName(): javax.naming.Name
    public getRemainingName(): javax.naming.Name
    public getResolvedObj(): java.lang.Object
    public getExplanation(): string
    public setResolvedName(arg0: javax.naming.Name): void
    public setRemainingName(arg0: javax.naming.Name): void
    public setResolvedObj(arg0: java.lang.Object): void
    public appendRemainingComponent(arg0: java.lang.String | string): void
    public appendRemainingName(arg0: javax.naming.Name): void
    public getRootCause(): java.lang.Throwable
    public setRootCause(arg0: java.lang.Throwable): void
    public getCause(): java.lang.Throwable
    public initCause(arg0: java.lang.Throwable): java.lang.Throwable
    public toString(): string
    public toString(arg0: boolean): string
    public static class: java.lang.Class<any>
}

    }
}