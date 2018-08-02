declare namespace javax {
    namespace naming {
        namespace spi {
class ResolveResult implements java.io.Serializable {
    protected resolvedObj: java.lang.Object
    protected remainingName: javax.naming.Name
    protected constructor()
    public constructor(arg0: java.lang.Object, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.Object, arg1: javax.naming.Name)
    public getRemainingName(): javax.naming.Name
    public getResolvedObj(): java.lang.Object
    public setRemainingName(arg0: javax.naming.Name): void
    public appendRemainingName(arg0: javax.naming.Name): void
    public appendRemainingComponent(arg0: java.lang.String | string): void
    public setResolvedObj(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

        }
    }
}