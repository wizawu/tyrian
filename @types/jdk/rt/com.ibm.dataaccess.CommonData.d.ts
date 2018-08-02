declare namespace com {
    namespace ibm {
        namespace dataaccess {
class CommonData {
    public static HIGHER_NIBBLE_MASK: int
    public static LOWER_NIBBLE_MASK: int
    public static INTEGER_MASK: int
    protected static EXTERNAL_SIGN_PLUS: byte
    protected static EXTERNAL_SIGN_MINUS: byte
    protected static EXTERNAL_EMBEDDED_SIGN_PLUS: byte
    protected static EXTERNAL_EMBEDDED_SIGN_MINUS: byte
    protected static EXTERNAL_EMBEDDED_SIGN_PLUS_ALTERNATE_A: byte
    protected static EXTERNAL_EMBEDDED_SIGN_PLUS_ALTERNATE_E: byte
    protected static EXTERNAL_EMBEDDED_SIGN_PLUS_ALTERNATE_F: byte
    protected static EXTERNAL_EMBEDDED_SIGN_MINUS_ALTERNATE_B: byte
    protected static PACKED_INVALID_DIGIT: byte
    public static getPackedSumValues(arg0: int): int
    public static getExternalByteCounts(arg0: int, arg1: int): int
    public static getPackedSumPlusOneValues(arg0: int): byte
    public static getPackedDifferenceValues(arg0: int): byte
    public static getPackedDifferenceMinusOneValues(arg0: int): byte
    public static getPackedAddOneValues(arg0: byte): byte
    public static getPackedBorrowOneValues(arg0: byte): byte
    public static getPackedToBinaryValues(arg0: int): int
    public static getBinaryToPackedValues(arg0: int): byte
    public static getSign(arg0: int): byte
    public static getPackedByteCount(arg0: int): int
    public static getPackedAddOneSignValues(arg0: byte): byte
    public static setPackedSumArrays(arg0: int, arg1: int, arg2: int, arg3: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}