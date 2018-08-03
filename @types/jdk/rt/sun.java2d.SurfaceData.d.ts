declare namespace sun {
    namespace java2d {
        abstract class SurfaceData implements java.awt.Transparency , sun.java2d.DisposerTarget , sun.java2d.StateTrackable , sun.java2d.Surface {
            protected static readonly colorPrimitives: sun.java2d.pipe.LoopPipe
            public static readonly outlineTextRenderer: sun.java2d.pipe.TextPipe
            public static readonly solidTextRenderer: sun.java2d.pipe.TextPipe
            public static readonly aaTextRenderer: sun.java2d.pipe.TextPipe
            public static readonly lcdTextRenderer: sun.java2d.pipe.TextPipe
            protected static readonly colorPipe: sun.java2d.pipe.AlphaColorPipe
            protected static readonly colorViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static readonly colorViaPgram: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly colorText: sun.java2d.pipe.TextPipe
            protected static readonly clipColorPipe: sun.java2d.pipe.CompositePipe
            protected static readonly clipColorText: sun.java2d.pipe.TextPipe
            protected static readonly AAColorShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AAColorViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly AAColorViaPgram: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly AAClipColorShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AAClipColorViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly paintPipe: sun.java2d.pipe.CompositePipe
            protected static readonly paintShape: sun.java2d.pipe.SpanShapeRenderer
            protected static readonly paintViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static readonly paintText: sun.java2d.pipe.TextPipe
            protected static readonly clipPaintPipe: sun.java2d.pipe.CompositePipe
            protected static readonly clipPaintText: sun.java2d.pipe.TextPipe
            protected static readonly AAPaintShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AAPaintViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly AAClipPaintShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AAClipPaintViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly compPipe: sun.java2d.pipe.CompositePipe
            protected static readonly compShape: sun.java2d.pipe.SpanShapeRenderer
            protected static readonly compViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static readonly compText: sun.java2d.pipe.TextPipe
            protected static readonly clipCompPipe: sun.java2d.pipe.CompositePipe
            protected static readonly clipCompText: sun.java2d.pipe.TextPipe
            protected static readonly AACompShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AACompViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly AAClipCompShape: sun.java2d.pipe.AAShapePipe
            protected static readonly AAClipCompViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static readonly imagepipe: sun.java2d.pipe.DrawImagePipe
            protected constructor(arg0: sun.java2d.loops.SurfaceType, arg1: java.awt.image.ColorModel)
            protected constructor(arg0: sun.java2d.StateTrackable$State, arg1: sun.java2d.loops.SurfaceType, arg2: java.awt.image.ColorModel)
            protected constructor(arg0: sun.java2d.StateTrackableDelegate, arg1: sun.java2d.loops.SurfaceType, arg2: java.awt.image.ColorModel)
            protected constructor(arg0: sun.java2d.StateTrackable$State)
            protected setBlitProxyKey(arg0: java.lang.Object): void
            public getSourceSurfaceData(arg0: java.awt.Image, arg1: int, arg2: sun.java2d.loops.CompositeType, arg3: java.awt.Color): sun.java2d.SurfaceData
            public makeProxyFor(arg0: sun.java2d.SurfaceData): sun.java2d.SurfaceDataProxy
            public static getPrimarySurfaceData(arg0: java.awt.Image): sun.java2d.SurfaceData
            public static restoreContents(arg0: java.awt.Image): sun.java2d.SurfaceData
            public getState(): sun.java2d.StateTrackable$State
            public getStateTracker(): sun.java2d.StateTracker
            public markDirty(): void
            public setSurfaceLost(arg0: boolean): void
            public isSurfaceLost(): boolean
            public isValid(): boolean
            public getDisposerReferent(): java.lang.Object
            public getNativeOps(): long
            public invalidate(): void
            public abstract getReplacement(): sun.java2d.SurfaceData
            public canRenderLCDText(arg0: sun.java2d.SunGraphics2D): boolean
            public canRenderParallelograms(arg0: sun.java2d.SunGraphics2D): boolean
            public validatePipe(arg0: sun.java2d.SunGraphics2D): void
            protected getMaskFill(arg0: sun.java2d.SunGraphics2D): sun.java2d.loops.MaskFill
            public getRenderLoops(arg0: sun.java2d.SunGraphics2D): sun.java2d.loops.RenderLoops
            public static makeRenderLoops(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.RenderLoops
            public abstract getDeviceConfiguration(): java.awt.GraphicsConfiguration
            public getSurfaceType(): sun.java2d.loops.SurfaceType
            public getColorModel(): java.awt.image.ColorModel
            public getTransparency(): int
            public abstract getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
            public useTightBBoxes(): boolean
            public pixelFor(arg0: int): int
            public pixelFor(arg0: java.awt.Color): int
            public rgbFor(arg0: int): int
            public abstract getBounds(): java.awt.Rectangle
            protected checkCustomComposite(): void
            protected static isOpaqueGray(arg0: java.awt.image.IndexColorModel): boolean
            public static isNull(arg0: sun.java2d.SurfaceData): boolean
            public copyArea(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
            public flush(): void
            public abstract getDestination(): java.lang.Object
            public getDefaultScale(): int
            public static class: java.lang.Class<any>
        }
    }
}