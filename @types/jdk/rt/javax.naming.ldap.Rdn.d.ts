declare namespace javax {
    namespace naming {
        namespace ldap {
class Rdn implements java.io.Serializable , java.lang.Comparable<java.lang.Object> {
    public constructor(arg0: javax.naming.directory.Attributes)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: javax.naming.ldap.Rdn)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
    public getValue(): java.lang.Object
    public getType(): string
    public toString(): string
    public compareTo(arg0: java.lang.Object): int
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toAttributes(): javax.naming.directory.Attributes
    public size(): int
    public static escapeValue(arg0: java.lang.Object): string
    public static unescapeValue(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}