declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRBackendNative implements sun.java2d.xr.XRBackend {
                public constructor()
                public createGC(arg0: int): long
                public freeGC(arg0: long): void
                public createPixmap(arg0: int, arg1: int, arg2: int, arg3: int): int
                public freePicture(arg0: int): void
                public freePixmap(arg0: int): void
                public setGCExposures(arg0: long, arg1: boolean): void
                public setGCForeground(arg0: long, arg1: int): void
                public setPictureRepeat(arg0: int, arg1: int): void
                public copyArea(arg0: int, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int): void
                public setGCMode(arg0: long, arg1: boolean): void
                public renderComposite(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int): void
                public setFilter(arg0: int, arg1: int): void
                public GCRectangles(arg0: int, arg1: long, arg2: sun.java2d.xr.GrowableRectArray): void
                public createPicture(arg0: int, arg1: int): int
                public setPictureTransform(arg0: int, arg1: java.awt.geom.AffineTransform): void
                public renderRectangle(arg0: int, arg1: byte, arg2: sun.java2d.xr.XRColor, arg3: int, arg4: int, arg5: int, arg6: int): void
                public createLinearGradient(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D, arg2: float[], arg3: int[], arg4: int): int
                public createRadialGradient(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float[], arg5: int[], arg6: int): int
                public setGCClipRectangles(arg0: long, arg1: sun.java2d.pipe.Region): void
                public setClipRectangles(arg0: int, arg1: sun.java2d.pipe.Region): void
                public renderRectangles(arg0: int, arg1: byte, arg2: sun.java2d.xr.XRColor, arg3: sun.java2d.xr.GrowableRectArray): void
                public XRenderAddGlyphs(arg0: int, arg1: sun.font.GlyphList, arg2: java.util.List<sun.font.XRGlyphCacheEntry>, arg3: byte[]): void
                public XRenderFreeGlyphs(arg0: int, arg1: int[]): void
                public XRenderCreateGlyphSet(arg0: int): int
                public XRenderCompositeText(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: sun.java2d.xr.GrowableEltArray): void
                public putMaskImage(arg0: int, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: float): void
                public padBlit(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: java.awt.geom.AffineTransform, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int, arg12: int, arg13: int, arg14: int): void
                public renderCompositeTrapezoids(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: sun.java2d.jules.TrapezoidList): void
                public static class: java.lang.Class<any>
            }
        }
    }
}