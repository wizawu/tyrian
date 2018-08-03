declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRCompositeManager {
                public static getInstance(arg0: sun.java2d.xr.XRSurfaceData): sun.java2d.xr.XRCompositeManager
                public initResources(arg0: sun.java2d.xr.XRSurfaceData): void
                public setForeground(arg0: int): void
                public setGradientPaint(arg0: sun.java2d.xr.XRSurfaceData): void
                public setTexturePaint(arg0: sun.java2d.xr.XRSurfaceData): void
                public XRResetPaint(): void
                public validateCompositeState(arg0: java.awt.Composite | java.awt.Composite$$Lambda, arg1: java.awt.geom.AffineTransform, arg2: java.awt.Paint | java.awt.Paint$$Lambda, arg3: sun.java2d.SunGraphics2D): void
                public maskRequired(): boolean
                public XRComposite(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int): void
                public XRCompositeTraps(arg0: int, arg1: int, arg2: int, arg3: sun.java2d.jules.TrapezoidList): void
                public XRRenderRectangles(arg0: sun.java2d.xr.XRSurfaceData, arg1: sun.java2d.xr.GrowableRectArray): void
                public XRCompositeRectangles(arg0: sun.java2d.xr.XRSurfaceData, arg1: sun.java2d.xr.GrowableRectArray): void
                protected getCurrentSource(): sun.java2d.xr.XRSurfaceData
                public compositeBlit(arg0: sun.java2d.xr.XRSurfaceData, arg1: sun.java2d.xr.XRSurfaceData, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): void
                public compositeText(arg0: sun.java2d.xr.XRSurfaceData, arg1: int, arg2: int, arg3: int, arg4: int, arg5: sun.java2d.xr.GrowableEltArray): void
                public getMaskColor(): sun.java2d.xr.XRColor
                public getExtraAlphaMask(): int
                public isTexturePaintActive(): boolean
                public isSolidPaintActive(): boolean
                public getAlphaColor(): sun.java2d.xr.XRColor
                public getBackend(): sun.java2d.xr.XRBackend
                public getExtraAlpha(): float
                public getCompRule(): byte
                public getTextRenderer(): sun.font.XRTextRenderer
                public getMaskBuffer(): sun.java2d.xr.MaskTileManager
                public getMaskImage(): sun.java2d.xr.XRMaskImage
                public static class: java.lang.Class<any>
            }
        }
    }
}