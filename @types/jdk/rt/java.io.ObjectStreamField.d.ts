declare namespace java {
    namespace io {
class ObjectStreamField implements java.lang.Comparable<java.lang.Object> {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: boolean)
    public getName(): string
    public getType(): java.lang.Class<any>
    public getTypeCode(): char
    public getTypeString(): string
    public getOffset(): int
    protected setOffset(arg0: int): void
    public isPrimitive(): boolean
    public isUnshared(): boolean
    public compareTo(arg0: java.lang.Object): int
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}