declare namespace javax {
  namespace imageio {
    namespace metadata {

      interface IIOMetadataFormat {
        public static readonly CHILD_POLICY_EMPTY: int
        public static readonly CHILD_POLICY_ALL: int
        public static readonly CHILD_POLICY_SOME: int
        public static readonly CHILD_POLICY_CHOICE: int
        public static readonly CHILD_POLICY_SEQUENCE: int
        public static readonly CHILD_POLICY_REPEAT: int
        public static readonly CHILD_POLICY_MAX: int
        public static readonly VALUE_NONE: int
        public static readonly VALUE_ARBITRARY: int
        public static readonly VALUE_RANGE: int
        public static readonly VALUE_RANGE_MIN_INCLUSIVE_MASK: int
        public static readonly VALUE_RANGE_MAX_INCLUSIVE_MASK: int
        public static readonly VALUE_RANGE_MIN_INCLUSIVE: int
        public static readonly VALUE_RANGE_MAX_INCLUSIVE: int
        public static readonly VALUE_RANGE_MIN_MAX_INCLUSIVE: int
        public static readonly VALUE_ENUMERATION: int
        public static readonly VALUE_LIST: int
        public static readonly DATATYPE_STRING: int
        public static readonly DATATYPE_BOOLEAN: int
        public static readonly DATATYPE_INTEGER: int
        public static readonly DATATYPE_FLOAT: int
        public static readonly DATATYPE_DOUBLE: int
        getRootName(): java.lang.String
        canNodeAppear(arg0: java.lang.String, arg1: javax.imageio.ImageTypeSpecifier): boolean
        getElementMinChildren(arg0: java.lang.String): int
        getElementMaxChildren(arg0: java.lang.String): int
        getElementDescription(arg0: java.lang.String, arg1: java.util.Locale): java.lang.String
        getChildPolicy(arg0: java.lang.String): int
        getChildNames(arg0: java.lang.String): java.lang.String[]
        getAttributeNames(arg0: java.lang.String): java.lang.String[]
        getAttributeValueType(arg0: java.lang.String, arg1: java.lang.String): int
        getAttributeDataType(arg0: java.lang.String, arg1: java.lang.String): int
        isAttributeRequired(arg0: java.lang.String, arg1: java.lang.String): boolean
        getAttributeDefaultValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getAttributeEnumerations(arg0: java.lang.String, arg1: java.lang.String): java.lang.String[]
        getAttributeMinValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getAttributeMaxValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getAttributeListMinLength(arg0: java.lang.String, arg1: java.lang.String): int
        getAttributeListMaxLength(arg0: java.lang.String, arg1: java.lang.String): int
        getAttributeDescription(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.Locale): java.lang.String
        getObjectValueType(arg0: java.lang.String): int
        getObjectClass(arg0: java.lang.String): java.lang.Class<unknown>
        getObjectDefaultValue(arg0: java.lang.String): java.lang.Object
        getObjectEnumerations(arg0: java.lang.String): java.lang.Object[]
        getObjectMinValue(arg0: java.lang.String): java.lang.Comparable<unknown>
        getObjectMaxValue(arg0: java.lang.String): java.lang.Comparable<unknown>
        getObjectArrayMinLength(arg0: java.lang.String): int
        getObjectArrayMaxLength(arg0: java.lang.String): int
      }

    }
  }
}
