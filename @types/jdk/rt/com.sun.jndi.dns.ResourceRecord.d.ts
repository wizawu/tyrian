declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                class ResourceRecord {
                    public toString(): string
                    public getName(): com.sun.jndi.dns.DnsName
                    public size(): int
                    public getType(): int
                    public getRrclass(): int
                    public getRdata(): java.lang.Object
                    public static getTypeName(arg0: int): string
                    public static getType(arg0: java.lang.String | string): int
                    public static getRrclassName(arg0: int): string
                    public static getRrclass(arg0: java.lang.String | string): int
                    public static compareSerialNumbers(arg0: long, arg1: long): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}