declare namespace sun {
    namespace font {
        class BidiUtils {
            public constructor()
            public static getLevels(arg0: java.text.Bidi, arg1: byte[], arg2: int): void
            public static getLevels(arg0: java.text.Bidi): byte[]
            public static createVisualToLogicalMap(arg0: byte[]): int[]
            public static createInverseMap(arg0: int[]): int[]
            public static createContiguousOrder(arg0: int[]): int[]
            public static createNormalizedMap(arg0: int[], arg1: byte[], arg2: int, arg3: int): int[]
            public static reorderVisually(arg0: byte[], arg1: java.lang.Object[]): void
            public static class: java.lang.Class<any>
        }
    }
}