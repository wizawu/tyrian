declare namespace javax {
  namespace management {
    namespace openmbean {
      class CompositeDataSupport implements javax.management.openmbean.CompositeData, java.io.Serializable {
        static readonly serialVersionUID: long
        public constructor(
          arg0: javax.management.openmbean.CompositeType,
          arg1: java.lang.String[] | string[],
          arg2: java.lang.Object[] | any[]
        )
        public constructor(
          arg0: javax.management.openmbean.CompositeType,
          arg1: java.util.Map<java.lang.String, unknown>
        )
        public getCompositeType(): javax.management.openmbean.CompositeType
        public get(arg0: java.lang.String | string): java.lang.Object
        public getAll(arg0: java.lang.String[] | string[]): java.lang.Object[]
        public containsKey(arg0: java.lang.String | string): boolean
        public containsValue(arg0: java.lang.Object | any): boolean
        public values(): java.util.Collection<unknown>
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
