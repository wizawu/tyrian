declare namespace sun {
    namespace management {
abstract class LazyCompositeData implements javax.management.openmbean.CompositeData , java.io.Serializable {
    public constructor()
    public containsKey(arg0: java.lang.String | string): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public equals(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.String | string): java.lang.Object
    public getAll(arg0: java.lang.String[]): java.lang.Object[]
    public getCompositeType(): javax.management.openmbean.CompositeType
    public hashCode(): int
    public toString(): string
    public values(): java.util.Collection<any>
    protected writeReplace(): java.lang.Object
    protected getCompositeData(): javax.management.openmbean.CompositeData
    protected static isTypeMatched(arg0: javax.management.openmbean.CompositeType, arg1: javax.management.openmbean.CompositeType): boolean
    protected static isTypeMatched(arg0: javax.management.openmbean.TabularType, arg1: javax.management.openmbean.TabularType): boolean
    protected static isTypeMatched(arg0: javax.management.openmbean.ArrayType<any>, arg1: javax.management.openmbean.ArrayType<any>): boolean
    public static class: java.lang.Class<any>
}

    }
}