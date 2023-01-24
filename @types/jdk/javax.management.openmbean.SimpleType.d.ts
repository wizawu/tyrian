declare namespace javax {
  namespace management {
    namespace openmbean {
      class SimpleType<T> extends javax.management.openmbean.OpenType<T> {
        static readonly serialVersionUID: long
        public static readonly VOID: javax.management.openmbean.SimpleType<java.lang.Void>
        public static readonly BOOLEAN: javax.management.openmbean.SimpleType<java.lang.Boolean>
        public static readonly CHARACTER: javax.management.openmbean.SimpleType<java.lang.Character>
        public static readonly BYTE: javax.management.openmbean.SimpleType<java.lang.Byte>
        public static readonly SHORT: javax.management.openmbean.SimpleType<java.lang.Short>
        public static readonly INTEGER: javax.management.openmbean.SimpleType<java.lang.Integer>
        public static readonly LONG: javax.management.openmbean.SimpleType<java.lang.Long>
        public static readonly FLOAT: javax.management.openmbean.SimpleType<java.lang.Float>
        public static readonly DOUBLE: javax.management.openmbean.SimpleType<java.lang.Double>
        public static readonly STRING: javax.management.openmbean.SimpleType<java.lang.String>
        public static readonly BIGDECIMAL: javax.management.openmbean.SimpleType<java.math.BigDecimal>
        public static readonly BIGINTEGER: javax.management.openmbean.SimpleType<java.math.BigInteger>
        public static readonly DATE: javax.management.openmbean.SimpleType<java.util.Date>
        public static readonly OBJECTNAME: javax.management.openmbean.SimpleType<javax.management.ObjectName>
        public isValue(arg0: java.lang.Object | any): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public readResolve(): java.lang.Object
      }
    }
  }
}
