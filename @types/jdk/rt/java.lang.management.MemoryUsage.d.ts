declare namespace java {
    namespace lang {
        namespace management {
class MemoryUsage {
    public constructor(arg0: long, arg1: long, arg2: long, arg3: long)
    public getCommitted(): long
    public getInit(): long
    public getMax(): long
    public getUsed(): long
    public toString(): string
    public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}