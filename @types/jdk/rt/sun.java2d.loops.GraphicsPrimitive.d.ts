declare namespace sun {
    namespace java2d {
        namespace loops {
            abstract class GraphicsPrimitive {
                public static traceflags: int
                public static tracefile: string
                public static traceout: java.io.PrintStream
                public static TRACELOG: int
                public static TRACETIMESTAMP: int
                public static TRACECOUNTS: int
                public static makePrimTypeID(): int
                public static makeUniqueID(arg0: int, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType): int
                protected constructor(arg0: java.lang.String | string, arg1: int, arg2: sun.java2d.loops.SurfaceType, arg3: sun.java2d.loops.CompositeType, arg4: sun.java2d.loops.SurfaceType)
                protected constructor(arg0: long, arg1: java.lang.String | string, arg2: int, arg3: sun.java2d.loops.SurfaceType, arg4: sun.java2d.loops.CompositeType, arg5: sun.java2d.loops.SurfaceType)
                public getUniqueID(): int
                public getSignature(): string
                public getPrimTypeID(): int
                public getNativePrim(): long
                public getSourceType(): sun.java2d.loops.SurfaceType
                public getCompositeType(): sun.java2d.loops.CompositeType
                public getDestType(): sun.java2d.loops.SurfaceType
                public satisfies(arg0: java.lang.String | string, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType): boolean
                public makePrimitive(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.GraphicsPrimitive
                public traceWrap(): sun.java2d.loops.GraphicsPrimitive
                public static tracingEnabled(): boolean
                public static tracePrimitive(arg0: java.lang.Object): void
                protected setupGeneralBinaryOp(arg0: sun.java2d.loops.GraphicsPrimitive$GeneralBinaryOp): void
                protected setupGeneralUnaryOp(arg0: sun.java2d.loops.GraphicsPrimitive$GeneralUnaryOp): void
                protected static createConverter(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.SurfaceType): sun.java2d.loops.Blit
                protected static convertFrom(arg0: sun.java2d.loops.Blit, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int, arg4: int, arg5: int, arg6: sun.java2d.SurfaceData): sun.java2d.SurfaceData
                protected static convertFrom(arg0: sun.java2d.loops.Blit, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int, arg4: int, arg5: int, arg6: sun.java2d.SurfaceData, arg7: int): sun.java2d.SurfaceData
                protected static convertTo(arg0: sun.java2d.loops.Blit, arg1: sun.java2d.SurfaceData, arg2: sun.java2d.SurfaceData, arg3: sun.java2d.pipe.Region, arg4: int, arg5: int, arg6: int, arg7: int): void
                protected static getGeneralOp(arg0: int, arg1: sun.java2d.loops.CompositeType): sun.java2d.loops.GraphicsPrimitive
                public static simplename(arg0: java.lang.reflect.Field[], arg1: java.lang.Object): string
                public static simplename(arg0: sun.java2d.loops.SurfaceType): string
                public static simplename(arg0: sun.java2d.loops.CompositeType): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}