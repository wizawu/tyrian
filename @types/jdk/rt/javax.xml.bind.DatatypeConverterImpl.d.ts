declare namespace javax {
    namespace xml {
        namespace bind {
            class DatatypeConverterImpl implements javax.xml.bind.DatatypeConverterInterface {
                public static theInstance: javax.xml.bind.DatatypeConverterInterface
                protected constructor()
                public parseString(arg0: java.lang.String | string): string
                public parseInteger(arg0: java.lang.String | string): java.math.BigInteger
                public static _parseInteger(arg0: java.lang.CharSequence): java.math.BigInteger
                public printInteger(arg0: java.math.BigInteger): string
                public static _printInteger(arg0: java.math.BigInteger): string
                public parseInt(arg0: java.lang.String | string): int
                public static _parseInt(arg0: java.lang.CharSequence): int
                public parseLong(arg0: java.lang.String | string): long
                public static _parseLong(arg0: java.lang.CharSequence): long
                public parseShort(arg0: java.lang.String | string): short
                public static _parseShort(arg0: java.lang.CharSequence): short
                public printShort(arg0: short): string
                public static _printShort(arg0: short): string
                public parseDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                public static _parseDecimal(arg0: java.lang.CharSequence): java.math.BigDecimal
                public parseFloat(arg0: java.lang.String | string): float
                public static _parseFloat(arg0: java.lang.CharSequence): float
                public printFloat(arg0: float): string
                public static _printFloat(arg0: float): string
                public parseDouble(arg0: java.lang.String | string): double
                public static _parseDouble(arg0: java.lang.CharSequence): double
                public parseBoolean(arg0: java.lang.String | string): boolean
                public static _parseBoolean(arg0: java.lang.CharSequence): boolean
                public printBoolean(arg0: boolean): string
                public static _printBoolean(arg0: boolean): string
                public parseByte(arg0: java.lang.String | string): byte
                public static _parseByte(arg0: java.lang.CharSequence): byte
                public printByte(arg0: byte): string
                public static _printByte(arg0: byte): string
                public parseQName(arg0: java.lang.String | string, arg1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
                public static _parseQName(arg0: java.lang.CharSequence, arg1: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
                public parseDateTime(arg0: java.lang.String | string): java.util.Calendar
                public static _parseDateTime(arg0: java.lang.CharSequence): java.util.GregorianCalendar
                public printDateTime(arg0: java.util.Calendar): string
                public static _printDateTime(arg0: java.util.Calendar): string
                public parseBase64Binary(arg0: java.lang.String | string): byte[]
                public parseHexBinary(arg0: java.lang.String | string): byte[]
                public printHexBinary(arg0: byte[]): string
                public parseUnsignedInt(arg0: java.lang.String | string): long
                public printUnsignedInt(arg0: long): string
                public parseUnsignedShort(arg0: java.lang.String | string): int
                public parseTime(arg0: java.lang.String | string): java.util.Calendar
                public printTime(arg0: java.util.Calendar): string
                public parseDate(arg0: java.lang.String | string): java.util.Calendar
                public printDate(arg0: java.util.Calendar): string
                public static _printDate(arg0: java.util.Calendar): string
                public parseAnySimpleType(arg0: java.lang.String | string): string
                public printString(arg0: java.lang.String | string): string
                public printInt(arg0: int): string
                public static _printInt(arg0: int): string
                public printLong(arg0: long): string
                public static _printLong(arg0: long): string
                public printDecimal(arg0: java.math.BigDecimal): string
                public static _printDecimal(arg0: java.math.BigDecimal): string
                public printDouble(arg0: double): string
                public static _printDouble(arg0: double): string
                public printQName(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.NamespaceContext): string
                public static _printQName(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.NamespaceContext): string
                public printBase64Binary(arg0: byte[]): string
                public printUnsignedShort(arg0: int): string
                public printAnySimpleType(arg0: java.lang.String | string): string
                public static installHook(arg0: java.lang.String | string): string
                public static _parseBase64Binary(arg0: java.lang.String | string): byte[]
                public static encode(arg0: int): char
                public static encodeByte(arg0: int): byte
                public static _printBase64Binary(arg0: byte[]): string
                public static _printBase64Binary(arg0: byte[], arg1: int, arg2: int): string
                public static _printBase64Binary(arg0: byte[], arg1: int, arg2: int, arg3: char[], arg4: int): int
                public static _printBase64Binary(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}