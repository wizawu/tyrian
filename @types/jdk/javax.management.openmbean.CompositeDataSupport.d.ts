declare namespace javax {
  namespace management {
    namespace openmbean {

      class CompositeDataSupport implements javax.management.openmbean.CompositeData, java.io.Serializable {
        static readonly serialVersionUID: long
        public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.lang.String[], arg2: java.lang.Object[])
        public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.util.Map<java.lang.String,unknown>)
        public getCompositeType(): javax.management.openmbean.CompositeType
        public get(arg0: java.lang.String): java.lang.Object
        public getAll(arg0: java.lang.String[]): java.lang.Object[]
        public containsKey(arg0: java.lang.String): boolean
        public containsValue(arg0: java.lang.Object): boolean
        public values(): java.util.Collection<unknown>
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
