declare namespace javax {
  namespace management {
    namespace openmbean {

      interface CompositeData {
        getCompositeType(): javax.management.openmbean.CompositeType
        get(arg0: java.lang.String | string): java.lang.Object
        getAll(arg0: java.lang.String[] | string[]): java.lang.Object[]
        containsKey(arg0: java.lang.String | string): boolean
        containsValue(arg0: java.lang.Object | any): boolean
        values(): java.util.Collection<unknown>
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
      }

    }
  }
}
