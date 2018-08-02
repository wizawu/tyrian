declare namespace javax {
    namespace management {
        namespace openmbean {
interface TabularData {
    getTabularType(): javax.management.openmbean.TabularType
    calculateIndex(arg0: javax.management.openmbean.CompositeData): java.lang.Object[]
    size(): int
    isEmpty(): boolean
    containsKey(arg0: java.lang.Object[]): boolean
    containsValue(arg0: javax.management.openmbean.CompositeData): boolean
    get(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
    put(arg0: javax.management.openmbean.CompositeData): void
    remove(arg0: java.lang.Object[]): javax.management.openmbean.CompositeData
    putAll(arg0: javax.management.openmbean.CompositeData[]): void
    clear(): void
    keySet(): java.util.Set<any>
    values(): java.util.Collection<any>
    equals(arg0: java.lang.Object): boolean
    hashCode(): int
    toString(): string
}

        }
    }
}