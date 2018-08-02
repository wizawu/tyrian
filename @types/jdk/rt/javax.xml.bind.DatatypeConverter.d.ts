declare namespace javax {
    namespace xml {
        namespace bind {
class DatatypeConverter {
    public static setDatatypeConverter(arg0: javax.xml.bind.DatatypeConverterInterface): void
    public static parseString(arg0: java.lang.String | string): string
    public static parseInteger(arg0: java.lang.String | string): java.math.BigInteger
    public static parseInt(arg0: java.lang.String | string): int
    public static parseLong(arg0: java.lang.String | string): long
    public static parseShort(arg0: java.lang.String | string): short
    public static parseDecimal(arg0: java.lang.String | string): java.math.BigDecimal
    public static parseFloat(arg0: java.lang.String | string): float
    public static parseDouble(arg0: java.lang.String | string): double
    public static parseBoolean(arg0: java.lang.String | string): boolean
    public static parseByte(arg0: java.lang.String | string): byte
    public static parseQName(arg0: java.lang.String | string, arg1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
    public static parseDateTime(arg0: java.lang.String | string): java.util.Calendar
    public static parseBase64Binary(arg0: java.lang.String | string): byte[]
    public static parseHexBinary(arg0: java.lang.String | string): byte[]
    public static parseUnsignedInt(arg0: java.lang.String | string): long
    public static parseUnsignedShort(arg0: java.lang.String | string): int
    public static parseTime(arg0: java.lang.String | string): java.util.Calendar
    public static parseDate(arg0: java.lang.String | string): java.util.Calendar
    public static parseAnySimpleType(arg0: java.lang.String | string): string
    public static printString(arg0: java.lang.String | string): string
    public static printInteger(arg0: java.math.BigInteger): string
    public static printInt(arg0: int): string
    public static printLong(arg0: long): string
    public static printShort(arg0: short): string
    public static printDecimal(arg0: java.math.BigDecimal): string
    public static printFloat(arg0: float): string
    public static printDouble(arg0: double): string
    public static printBoolean(arg0: boolean): string
    public static printByte(arg0: byte): string
    public static printQName(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.NamespaceContext): string
    public static printDateTime(arg0: java.util.Calendar): string
    public static printBase64Binary(arg0: byte[]): string
    public static printHexBinary(arg0: byte[]): string
    public static printUnsignedInt(arg0: long): string
    public static printUnsignedShort(arg0: int): string
    public static printTime(arg0: java.util.Calendar): string
    public static printDate(arg0: java.util.Calendar): string
    public static printAnySimpleType(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

        }
    }
}