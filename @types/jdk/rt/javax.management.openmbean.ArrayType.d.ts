declare namespace javax {
    namespace management {
        namespace openmbean {
class ArrayType<T> extends javax.management.openmbean.OpenType<T> {
    public constructor(arg0: int, arg1: javax.management.openmbean.OpenType<any>)
    public constructor(arg0: javax.management.openmbean.SimpleType<any>, arg1: boolean)
    public getDimension(): int
    public getElementOpenType(): javax.management.openmbean.OpenType<any>
    public isPrimitiveArray(): boolean
    public isValue(arg0: java.lang.Object): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static getArrayType<E>(arg0: javax.management.openmbean.OpenType<E>): javax.management.openmbean.ArrayType<E[]>
    public static getPrimitiveArrayType<T>(arg0: java.lang.Class<T>): javax.management.openmbean.ArrayType<T>
    public static class: java.lang.Class<any>
}

        }
    }
}