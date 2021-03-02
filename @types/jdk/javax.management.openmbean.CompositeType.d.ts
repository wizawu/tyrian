declare namespace javax {
  namespace management {
    namespace openmbean {

      class CompositeType extends javax.management.openmbean.OpenType<javax.management.openmbean.CompositeData> {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String[], arg3: java.lang.String[], arg4: javax.management.openmbean.OpenType<unknown>[])
        public containsKey(arg0: java.lang.String): boolean
        public getDescription(arg0: java.lang.String): java.lang.String
        public getType(arg0: java.lang.String): javax.management.openmbean.OpenType<unknown>
        public keySet(): java.util.Set<java.lang.String>
        public isValue(arg0: java.lang.Object): boolean
        isAssignableFrom(arg0: javax.management.openmbean.OpenType<unknown>): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
