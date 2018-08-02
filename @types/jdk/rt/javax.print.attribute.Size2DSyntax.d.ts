declare namespace javax {
    namespace print {
        namespace attribute {
abstract class Size2DSyntax implements java.io.Serializable , java.lang.Cloneable {
    public static INCH: int
    public static MM: int
    protected constructor(arg0: float, arg1: float, arg2: int)
    protected constructor(arg0: int, arg1: int, arg2: int)
    public getSize(arg0: int): float[]
    public getX(arg0: int): float
    public getY(arg0: int): float
    public toString(arg0: int, arg1: java.lang.String | string): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    protected getXMicrometers(): int
    protected getYMicrometers(): int
    public static class: java.lang.Class<any>
}

        }
    }
}