declare namespace javax {
  namespace management {
    namespace openmbean {

      interface CompositeData {
        getCompositeType(): javax.management.openmbean.CompositeType
        get(arg0: java.lang.String): java.lang.Object
        getAll(arg0: java.lang.String[]): java.lang.Object[]
        containsKey(arg0: java.lang.String): boolean
        containsValue(arg0: java.lang.Object): boolean
        values(): java.util.Collection<unknown>
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
      }

    }
  }
}
