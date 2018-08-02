declare namespace com {
    namespace ibm {
        namespace dataaccess {
            class PackedDecimal {
                public static checkPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: boolean, arg4: boolean): int
                public static checkPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: boolean): int
                public static checkPackedDecimal(arg0: byte[], arg1: int, arg2: int): int
                public static addPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: byte[], arg7: int, arg8: int, arg9: boolean): void
                public static subtractPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: byte[], arg7: int, arg8: int, arg9: boolean): void
                public static setPackedZero(arg0: byte[], arg1: int, arg2: int): void
                public static multiplyPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: byte[], arg7: int, arg8: int, arg9: boolean): void
                public static dividePackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: byte[], arg7: int, arg8: int, arg9: boolean): void
                public static remainderPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: byte[], arg7: int, arg8: int, arg9: boolean): void
                public static lessThanPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static lessThanOrEqualsPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static greaterThanPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static greaterThanOrEqualsPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static equalsPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static notEqualsPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): boolean
                public static shiftRightPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: int, arg7: boolean, arg8: boolean): void
                public static shiftLeftPackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: int, arg7: boolean): void
                public static movePackedDecimal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}