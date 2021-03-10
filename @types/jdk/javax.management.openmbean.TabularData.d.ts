declare namespace javax {
  namespace management {
    namespace openmbean {

      interface TabularData {
        getTabularType(): javax.management.openmbean.TabularType
        calculateIndex(arg0: javax.management.openmbean.CompositeData): java.lang.Object[]
        size(): number
        isEmpty(): boolean
        containsKey(arg0: java.lang.Object[] | any[]): boolean
        containsValue(arg0: javax.management.openmbean.CompositeData): boolean
        get(arg0: java.lang.Object[] | any[]): javax.management.openmbean.CompositeData
        put(arg0: javax.management.openmbean.CompositeData): void
        remove(arg0: java.lang.Object[] | any[]): javax.management.openmbean.CompositeData
        putAll(arg0: javax.management.openmbean.CompositeData[]): void
        clear(): void
        keySet(): java.util.Set<unknown>
        values(): java.util.Collection<unknown>
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }

    }
  }
}
