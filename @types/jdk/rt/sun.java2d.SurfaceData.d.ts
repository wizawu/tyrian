declare namespace sun {
    namespace java2d {
        abstract class SurfaceData implements java.awt.Transparency , sun.java2d.DisposerTarget , sun.java2d.StateTrackable , sun.java2d.Surface {
            protected static colorPrimitives: sun.java2d.pipe.LoopPipe
            public static outlineTextRenderer: sun.java2d.pipe.TextPipe
            public static solidTextRenderer: sun.java2d.pipe.TextPipe
            public static aaTextRenderer: sun.java2d.pipe.TextPipe
            public static lcdTextRenderer: sun.java2d.pipe.TextPipe
            protected static colorPipe: sun.java2d.pipe.AlphaColorPipe
            protected static colorViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static colorViaPgram: sun.java2d.pipe.PixelToParallelogramConverter
            protected static colorText: sun.java2d.pipe.TextPipe
            protected static clipColorPipe: sun.java2d.pipe.CompositePipe
            protected static clipColorText: sun.java2d.pipe.TextPipe
            protected static AAColorShape: sun.java2d.pipe.AAShapePipe
            protected static AAColorViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static AAColorViaPgram: sun.java2d.pipe.PixelToParallelogramConverter
            protected static AAClipColorShape: sun.java2d.pipe.AAShapePipe
            protected static AAClipColorViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static paintPipe: sun.java2d.pipe.CompositePipe
            protected static paintShape: sun.java2d.pipe.SpanShapeRenderer
            protected static paintViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static paintText: sun.java2d.pipe.TextPipe
            protected static clipPaintPipe: sun.java2d.pipe.CompositePipe
            protected static clipPaintText: sun.java2d.pipe.TextPipe
            protected static AAPaintShape: sun.java2d.pipe.AAShapePipe
            protected static AAPaintViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static AAClipPaintShape: sun.java2d.pipe.AAShapePipe
            protected static AAClipPaintViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static compPipe: sun.java2d.pipe.CompositePipe
            protected static compShape: sun.java2d.pipe.SpanShapeRenderer
            protected static compViaShape: sun.java2d.pipe.PixelToShapeConverter
            protected static compText: sun.java2d.pipe.TextPipe
            protected static clipCompPipe: sun.java2d.pipe.CompositePipe
            protected static clipCompText: sun.java2d.pipe.TextPipe
            protected static AACompShape: sun.java2d.pipe.AAShapePipe
            protected static AACompViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static AAClipCompShape: sun.java2d.pipe.AAShapePipe
            protected static AAClipCompViaShape: sun.java2d.pipe.PixelToParallelogramConverter
            protected static imagepipe: sun.java2d.pipe.DrawImagePipe
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
            public getReplacement(): sun.java2d.SurfaceData
            public canRenderLCDText(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): boolean
            public canRenderParallelograms(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): boolean
            public validatePipe(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): void
            protected getMaskFill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): sun.java2d.loops.MaskFill
            public getRenderLoops(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): sun.java2d.loops.RenderLoops
            public static makeRenderLoops(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.RenderLoops
            public getDeviceConfiguration(): java.awt.GraphicsConfiguration
            public getSurfaceType(): sun.java2d.loops.SurfaceType
            public getColorModel(): java.awt.image.ColorModel
            public getTransparency(): int
            public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
            public useTightBBoxes(): boolean
            public pixelFor(arg0: int): int
            public pixelFor(arg0: java.awt.Color): int
            public rgbFor(arg0: int): int
            public getBounds(): java.awt.Rectangle
            protected checkCustomComposite(): void
            protected static isOpaqueGray(arg0: java.awt.image.IndexColorModel): boolean
            public static isNull(arg0: sun.java2d.SurfaceData): boolean
            public copyArea(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
            public flush(): void
            public getDestination(): java.lang.Object
            public getDefaultScale(): int
            public static class: java.lang.Class<any>
        }
    }
}