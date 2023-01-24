declare namespace javax {
  namespace imageio {
    namespace metadata {
      interface IIOMetadataFormat {
        readonly CHILD_POLICY_EMPTY: int
        readonly CHILD_POLICY_ALL: int
        readonly CHILD_POLICY_SOME: int
        readonly CHILD_POLICY_CHOICE: int
        readonly CHILD_POLICY_SEQUENCE: int
        readonly CHILD_POLICY_REPEAT: int
        readonly CHILD_POLICY_MAX: int
        readonly VALUE_NONE: int
        readonly VALUE_ARBITRARY: int
        readonly VALUE_RANGE: int
        readonly VALUE_RANGE_MIN_INCLUSIVE_MASK: int
        readonly VALUE_RANGE_MAX_INCLUSIVE_MASK: int
        readonly VALUE_RANGE_MIN_INCLUSIVE: int
        readonly VALUE_RANGE_MAX_INCLUSIVE: int
        readonly VALUE_RANGE_MIN_MAX_INCLUSIVE: int
        readonly VALUE_ENUMERATION: int
        readonly VALUE_LIST: int
        readonly DATATYPE_STRING: int
        readonly DATATYPE_BOOLEAN: int
        readonly DATATYPE_INTEGER: int
        readonly DATATYPE_FLOAT: int
        readonly DATATYPE_DOUBLE: int
        getRootName(): java.lang.String
        canNodeAppear(arg0: java.lang.String | string, arg1: javax.imageio.ImageTypeSpecifier): boolean
        getElementMinChildren(arg0: java.lang.String | string): number
        getElementMaxChildren(arg0: java.lang.String | string): number
        getElementDescription(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        getChildPolicy(arg0: java.lang.String | string): number
        getChildNames(arg0: java.lang.String | string): java.lang.String[]
        getAttributeNames(arg0: java.lang.String | string): java.lang.String[]
        getAttributeValueType(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        getAttributeDataType(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        isAttributeRequired(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
        getAttributeDefaultValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getAttributeEnumerations(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
        getAttributeMinValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getAttributeMaxValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getAttributeListMinLength(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        getAttributeListMaxLength(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        getAttributeDescription(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.util.Locale
        ): java.lang.String
        getObjectValueType(arg0: java.lang.String | string): number
        getObjectClass(arg0: java.lang.String | string): java.lang.Class<unknown>
        getObjectDefaultValue(arg0: java.lang.String | string): java.lang.Object
        getObjectEnumerations(arg0: java.lang.String | string): java.lang.Object[]
        getObjectMinValue(arg0: java.lang.String | string): java.lang.Comparable<unknown>
        getObjectMaxValue(arg0: java.lang.String | string): java.lang.Comparable<unknown>
        getObjectArrayMinLength(arg0: java.lang.String | string): number
        getObjectArrayMaxLength(arg0: java.lang.String | string): number
      }
    }
  }
}
