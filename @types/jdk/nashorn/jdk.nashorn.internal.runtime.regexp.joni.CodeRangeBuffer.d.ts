declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class CodeRangeBuffer implements java.lang.Cloneable {
                            public constructor()
                            public isInCodeRange(arg0: int): boolean
                            public toString(): string
                            public expand(arg0: int): void
                            public ensureSize(arg0: int): void
                            protected moveLeft(arg0: int, arg1: int, arg2: int): void
                            public writeCodePoint(arg0: int, arg1: int): void
                            public clone(): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addCodeRangeToBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: int, arg2: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addCodeRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg2: int, arg3: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            protected static setAllMultiByteRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static addAllMultiByteRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static notCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static orCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg3: boolean): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static andCodeRange1(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: int, arg2: int, arg3: int[], arg4: int): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public static andCodeRangeBuff(arg0: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer, arg3: boolean): jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                            public clone(): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}