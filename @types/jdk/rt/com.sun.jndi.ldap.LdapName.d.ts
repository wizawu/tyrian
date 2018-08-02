declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
class LdapName implements javax.naming.Name {
    public constructor(arg0: java.lang.String | string)
    public clone(): java.lang.Object
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public compareTo(arg0: java.lang.Object): int
    public hashCode(): int
    public size(): int
    public isEmpty(): boolean
    public getAll(): java.util.Enumeration<java.lang.String>
    public get(arg0: int): string
    public getPrefix(arg0: int): javax.naming.Name
    public getSuffix(arg0: int): javax.naming.Name
    public startsWith(arg0: javax.naming.Name): boolean
    public endsWith(arg0: javax.naming.Name): boolean
    public setValuesCaseSensitive(arg0: boolean): void
    public addAll(arg0: javax.naming.Name): javax.naming.Name
    public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
    public add(arg0: java.lang.String | string): javax.naming.Name
    public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
    public remove(arg0: int): java.lang.Object
    public static escapeAttributeValue(arg0: java.lang.Object): string
    public static unescapeAttributeValue(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}