declare namespace sun {
    namespace font {
        class CoreMetrics {
            public readonly ascent: float
            public readonly descent: float
            public readonly leading: float
            public readonly height: float
            public readonly baselineIndex: int
            public readonly baselineOffsets: float[]
            public readonly strikethroughOffset: float
            public readonly strikethroughThickness: float
            public readonly underlineOffset: float
            public readonly underlineThickness: float
            public readonly ssOffset: float
            public readonly italicAngle: float
            public constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: int, arg5: float[], arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float)
            public static get(arg0: java.awt.font.LineMetrics): sun.font.CoreMetrics
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public equals(arg0: sun.font.CoreMetrics): boolean
            public effectiveBaselineOffset(arg0: float[]): float
            public static class: java.lang.Class<any>
        }
    }
}