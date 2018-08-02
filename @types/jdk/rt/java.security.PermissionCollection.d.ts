declare namespace java {
    namespace security {
abstract class PermissionCollection implements java.io.Serializable {
    public constructor()
    public add(arg0: java.security.Permission): void
    public implies(arg0: java.security.Permission): boolean
    public elements(): java.util.Enumeration<java.security.Permission>
    public setReadOnly(): void
    public isReadOnly(): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}