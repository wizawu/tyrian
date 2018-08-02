declare namespace javax {
    namespace xml {
        namespace bind {
            interface DatatypeConverterInterface {
                parseString(arg0: java.lang.String | string): string
                parseInteger(arg0: java.lang.String | string): java.math.BigInteger
                parseInt(arg0: java.lang.String | string): int
                parseLong(arg0: java.lang.String | string): long
                parseShort(arg0: java.lang.String | string): short
                parseDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                parseFloat(arg0: java.lang.String | string): float
                parseDouble(arg0: java.lang.String | string): double
                parseBoolean(arg0: java.lang.String | string): boolean
                parseByte(arg0: java.lang.String | string): byte
                parseQName(arg0: java.lang.String | string, arg1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
                parseDateTime(arg0: java.lang.String | string): java.util.Calendar
                parseBase64Binary(arg0: java.lang.String | string): byte[]
                parseHexBinary(arg0: java.lang.String | string): byte[]
                parseUnsignedInt(arg0: java.lang.String | string): long
                parseUnsignedShort(arg0: java.lang.String | string): int
                parseTime(arg0: java.lang.String | string): java.util.Calendar
                parseDate(arg0: java.lang.String | string): java.util.Calendar
                parseAnySimpleType(arg0: java.lang.String | string): string
                printString(arg0: java.lang.String | string): string
                printInteger(arg0: java.math.BigInteger): string
                printInt(arg0: int): string
                printLong(arg0: long): string
                printShort(arg0: short): string
                printDecimal(arg0: java.math.BigDecimal): string
                printFloat(arg0: float): string
                printDouble(arg0: double): string
                printBoolean(arg0: boolean): string
                printByte(arg0: byte): string
                printQName(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.NamespaceContext): string
                printDateTime(arg0: java.util.Calendar): string
                printBase64Binary(arg0: byte[]): string
                printHexBinary(arg0: byte[]): string
                printUnsignedInt(arg0: long): string
                printUnsignedShort(arg0: int): string
                printTime(arg0: java.util.Calendar): string
                printDate(arg0: java.util.Calendar): string
                printAnySimpleType(arg0: java.lang.String | string): string
            }
        }
    }
}