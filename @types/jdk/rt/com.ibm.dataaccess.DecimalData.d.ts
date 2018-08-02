declare namespace com {
    namespace ibm {
        namespace dataaccess {
            class DecimalData {
                public static EBCDIC_SIGN_EMBEDDED_TRAILING: int
                public static EBCDIC_SIGN_EMBEDDED_LEADING: int
                public static EBCDIC_SIGN_SEPARATE_TRAILING: int
                public static EBCDIC_SIGN_SEPARATE_LEADING: int
                public static UNICODE_UNSIGNED: int
                public static UNICODE_SIGN_SEPARATE_LEADING: int
                public static UNICODE_SIGN_SEPARATE_TRAILING: int
                public static convertIntegerToPackedDecimal(arg0: int, arg1: byte[], arg2: int, arg3: int, arg4: boolean): void
                public static convertIntegerToExternalDecimal(arg0: int, arg1: byte[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertIntegerToUnicodeDecimal(arg0: int, arg1: char[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertLongToPackedDecimal(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: boolean): void
                public static convertLongToExternalDecimal(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertLongToUnicodeDecimal(arg0: long, arg1: char[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertPackedDecimalToInteger(arg0: byte[], arg1: int, arg2: int, arg3: boolean): int
                public static convertPackedDecimalToLong(arg0: byte[], arg1: int, arg2: int, arg3: boolean): long
                public static convertPackedDecimalToExternalDecimal(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int, arg5: int): void
                public static convertPackedDecimalToUnicodeDecimal(arg0: byte[], arg1: int, arg2: char[], arg3: int, arg4: int, arg5: int): void
                public static convertPackedDecimalToBigInteger(arg0: byte[], arg1: int, arg2: int, arg3: boolean): java.math.BigInteger
                public static convertPackedDecimalToBigDecimal(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: boolean): java.math.BigDecimal
                public static convertExternalDecimalToInteger(arg0: byte[], arg1: int, arg2: int, arg3: boolean, arg4: int): int
                public static convertExternalDecimalToLong(arg0: byte[], arg1: int, arg2: int, arg3: boolean, arg4: int): long
                public static convertExternalDecimalToPackedDecimal(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int, arg5: int): void
                public static convertExternalDecimalToBigInteger(arg0: byte[], arg1: int, arg2: int, arg3: boolean, arg4: int): java.math.BigInteger
                public static convertExternalDecimalToBigDecimal(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: boolean, arg5: int): java.math.BigDecimal
                public static convertUnicodeDecimalToInteger(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: int): int
                public static convertUnicodeDecimalToLong(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: int): long
                public static convertUnicodeDecimalToPackedDecimal(arg0: char[], arg1: int, arg2: byte[], arg3: int, arg4: int, arg5: int): void
                public static convertUnicodeDecimalToBigInteger(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: int): java.math.BigInteger
                public static convertUnicodeDecimalToBigDecimal(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: boolean, arg5: int): java.math.BigDecimal
                public static convertBigIntegerToPackedDecimal(arg0: java.math.BigInteger, arg1: byte[], arg2: int, arg3: int, arg4: boolean): void
                public static convertBigIntegerToExternalDecimal(arg0: java.math.BigInteger, arg1: byte[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertBigIntegerToUnicodeDecimal(arg0: java.math.BigInteger, arg1: char[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertBigDecimalToPackedDecimal(arg0: java.math.BigDecimal, arg1: byte[], arg2: int, arg3: int, arg4: boolean): void
                public static convertBigDecimalToExternalDecimal(arg0: java.math.BigDecimal, arg1: byte[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static convertBigDecimalToUnicodeDecimal(arg0: java.math.BigDecimal, arg1: char[], arg2: int, arg3: int, arg4: boolean, arg5: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}