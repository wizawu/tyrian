declare namespace javax {
  namespace management {
    namespace openmbean {

      class CompositeType extends javax.management.openmbean.OpenType<javax.management.openmbean.CompositeData> {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[] | string[], arg3: java.lang.String[] | string[], arg4: javax.management.openmbean.OpenType<unknown>[])
        public containsKey(arg0: java.lang.String | string): boolean
        public getDescription(arg0: java.lang.String | string): java.lang.String
        public getType(arg0: java.lang.String | string): javax.management.openmbean.OpenType<unknown>
        public keySet(): java.util.Set<java.lang.String>
        public isValue(arg0: java.lang.Object | any): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}
