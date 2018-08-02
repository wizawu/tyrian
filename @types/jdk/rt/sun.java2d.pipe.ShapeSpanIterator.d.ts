declare namespace sun {
    namespace java2d {
        namespace pipe {
            class ShapeSpanIterator implements sun.java2d.pipe.SpanIterator , sun.awt.geom.PathConsumer2D {
                public static initIDs(): void
                public constructor(arg0: boolean)
                public appendPath(arg0: java.awt.geom.PathIterator): void
                public appendPoly(arg0: int[], arg1: int[], arg2: int, arg3: int, arg4: int): void
                public setOutputAreaXYWH(arg0: int, arg1: int, arg2: int, arg3: int): void
                public setOutputAreaXYXY(arg0: int, arg1: int, arg2: int, arg3: int): void
                public setOutputArea(arg0: java.awt.Rectangle): void
                public setOutputArea(arg0: sun.java2d.pipe.Region): void
                public setRule(arg0: int): void
                public addSegment(arg0: int, arg1: float[]): void
                public getPathBox(arg0: int[]): void
                public intersectClipBox(arg0: int, arg1: int, arg2: int, arg3: int): void
                public nextSpan(arg0: int[]): boolean
                public skipDownTo(arg0: int): void
                public getNativeIterator(): long
                public dispose(): void
                public moveTo(arg0: float, arg1: float): void
                public lineTo(arg0: float, arg1: float): void
                public quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
                public curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
                public closePath(): void
                public pathDone(): void
                public getNativeConsumer(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}