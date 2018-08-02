declare namespace javax {
    namespace management {
        namespace openmbean {
class TabularDataSupport implements javax.management.openmbean.TabularData , java.util.Map<java.lang.Object, java.lang.Object> , java.lang.Cloneable , java.io.Serializable {
    public constructor(arg0: javax.management.openmbean.TabularType)
    public constructor(arg0: javax.management.openmbean.TabularType, arg1: int, arg2: float)
    public getTabularType(): javax.management.openmbean.TabularType
    public calculateIndex(arg0: javax.management.openmbean.CompositeData): java.lang.Object[]
    public containsKey(arg0: java.lang.Object): boolean
    public containsKey(arg0: java.lang.Object[]): boolean
    public containsValue(arg0: javax.management.openmbean.CompositeData): boolean
    public containsValue(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): java.lang.Object
    public get(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public put(arg0: javax.management.openmbean.CompositeData): void
    public remove(arg0: java.lang.Object): java.lang.Object
    public remove(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
    public putAll(arg0: java.util.Map<any, any>): void
    public putAll(arg0: javax.management.openmbean.CompositeData[]): void
    public clear(): void
    public size(): int
    public isEmpty(): boolean
    public keySet(): java.util.Set<java.lang.Object>
    public values(): java.util.Collection<java.lang.Object>
    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
    public clone(): java.lang.Object
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}