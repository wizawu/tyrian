declare namespace javax {
  namespace management {
    namespace openmbean {

      class TabularType extends javax.management.openmbean.OpenType<javax.management.openmbean.TabularData> {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.openmbean.CompositeType, arg3: java.lang.String[])
        public getRowType(): javax.management.openmbean.CompositeType
        public getIndexNames(): java.util.List<java.lang.String>
        public isValue(arg0: java.lang.Object | any): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}
