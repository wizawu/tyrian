declare namespace java {
    namespace awt {
        class BasicStroke implements java.awt.Stroke {
            public static readonly JOIN_MITER: int
            public static readonly JOIN_ROUND: int
            public static readonly JOIN_BEVEL: int
            public static readonly CAP_BUTT: int
            public static readonly CAP_ROUND: int
            public static readonly CAP_SQUARE: int
            public constructor(arg0: float, arg1: int, arg2: int, arg3: float, arg4: float[], arg5: float)
            public constructor(arg0: float, arg1: int, arg2: int, arg3: float)
            public constructor(arg0: float, arg1: int, arg2: int)
            public constructor(arg0: float)
            public constructor()
            public createStrokedShape(arg0: java.awt.Shape): java.awt.Shape
            public getLineWidth(): float
            public getEndCap(): int
            public getLineJoin(): int
            public getMiterLimit(): float
            public getDashArray(): float[]
            public getDashPhase(): float
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
    }
}