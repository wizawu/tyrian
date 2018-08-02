declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                class DnsName implements javax.naming.Name {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public isHostName(): boolean
                    public getOctets(): short
                    public size(): int
                    public isEmpty(): boolean
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public compareTo(arg0: java.lang.Object): int
                    public startsWith(arg0: javax.naming.Name): boolean
                    public endsWith(arg0: javax.naming.Name): boolean
                    public get(arg0: int): string
                    public getAll(): java.util.Enumeration<java.lang.String>
                    public getPrefix(arg0: int): javax.naming.Name
                    public getSuffix(arg0: int): javax.naming.Name
                    public clone(): java.lang.Object
                    public remove(arg0: int): java.lang.Object
                    public add(arg0: java.lang.String | string): javax.naming.Name
                    public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
                    public addAll(arg0: javax.naming.Name): javax.naming.Name
                    public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}