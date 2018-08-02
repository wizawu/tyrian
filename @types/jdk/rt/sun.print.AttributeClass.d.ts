declare namespace sun {
    namespace print {
class AttributeClass {
    public static TAG_UNSUPPORTED_VALUE: int
    public static TAG_INT: int
    public static TAG_BOOL: int
    public static TAG_ENUM: int
    public static TAG_OCTET: int
    public static TAG_DATE: int
    public static TAG_RESOLUTION: int
    public static TAG_RANGE_INTEGER: int
    public static TAG_TEXT_LANGUAGE: int
    public static TAG_NAME_LANGUAGE: int
    public static TAG_TEXT_WO_LANGUAGE: int
    public static TAG_NAME_WO_LANGUAGE: int
    public static TAG_KEYWORD: int
    public static TAG_URI: int
    public static TAG_CHARSET: int
    public static TAG_NATURALLANGUAGE: int
    public static TAG_MIME_MEDIATYPE: int
    public static TAG_MEMBER_ATTRNAME: int
    public static ATTRIBUTES_CHARSET: sun.print.AttributeClass
    public static ATTRIBUTES_NATURAL_LANGUAGE: sun.print.AttributeClass
    protected constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object)
    public getType(): byte
    public getLenChars(): char[]
    public getObjectValue(): java.lang.Object
    public getIntValue(): int
    public getArrayOfIntValues(): int[]
    public getIntRangeValue(): int[]
    public getStringValue(): string
    public getArrayOfStringValues(): java.lang.String[]
    public getByteValue(): byte
    public getName(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}