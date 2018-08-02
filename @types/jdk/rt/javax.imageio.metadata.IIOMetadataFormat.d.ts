declare namespace javax {
    namespace imageio {
        namespace metadata {
interface IIOMetadataFormat {
    CHILD_POLICY_EMPTY: int
    CHILD_POLICY_ALL: int
    CHILD_POLICY_SOME: int
    CHILD_POLICY_CHOICE: int
    CHILD_POLICY_SEQUENCE: int
    CHILD_POLICY_REPEAT: int
    CHILD_POLICY_MAX: int
    VALUE_NONE: int
    VALUE_ARBITRARY: int
    VALUE_RANGE: int
    VALUE_RANGE_MIN_INCLUSIVE_MASK: int
    VALUE_RANGE_MAX_INCLUSIVE_MASK: int
    VALUE_RANGE_MIN_INCLUSIVE: int
    VALUE_RANGE_MAX_INCLUSIVE: int
    VALUE_RANGE_MIN_MAX_INCLUSIVE: int
    VALUE_ENUMERATION: int
    VALUE_LIST: int
    DATATYPE_STRING: int
    DATATYPE_BOOLEAN: int
    DATATYPE_INTEGER: int
    DATATYPE_FLOAT: int
    DATATYPE_DOUBLE: int
    getRootName(): string
    canNodeAppear(arg0: java.lang.String | string, arg1: javax.imageio.ImageTypeSpecifier): boolean
    getElementMinChildren(arg0: java.lang.String | string): int
    getElementMaxChildren(arg0: java.lang.String | string): int
    getElementDescription(arg0: java.lang.String | string, arg1: java.util.Locale): string
    getChildPolicy(arg0: java.lang.String | string): int
    getChildNames(arg0: java.lang.String | string): java.lang.String[]
    getAttributeNames(arg0: java.lang.String | string): java.lang.String[]
    getAttributeValueType(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    getAttributeDataType(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    isAttributeRequired(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    getAttributeDefaultValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    getAttributeEnumerations(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
    getAttributeMinValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    getAttributeMaxValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    getAttributeListMinLength(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    getAttributeListMaxLength(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    getAttributeDescription(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Locale): string
    getObjectValueType(arg0: java.lang.String | string): int
    getObjectClass(arg0: java.lang.String | string): java.lang.Class<any>
    getObjectDefaultValue(arg0: java.lang.String | string): java.lang.Object
    getObjectEnumerations(arg0: java.lang.String | string): java.lang.Object[]
    getObjectMinValue(arg0: java.lang.String | string): java.lang.Comparable<any>
    getObjectMaxValue(arg0: java.lang.String | string): java.lang.Comparable<any>
    getObjectArrayMinLength(arg0: java.lang.String | string): int
    getObjectArrayMaxLength(arg0: java.lang.String | string): int
}

        }
    }
}