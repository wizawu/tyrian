declare namespace sun {
    namespace java2d {
        namespace xr {
            interface XRBackend {
                freePicture(arg0: int): void
                freePixmap(arg0: int): void
                createPixmap(arg0: int, arg1: int, arg2: int, arg3: int): int
                createPicture(arg0: int, arg1: int): int
                createGC(arg0: int): long
                freeGC(arg0: long): void
                copyArea(arg0: int, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int): void
                putMaskImage(arg0: int, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: float): void
                setGCClipRectangles(arg0: long, arg1: sun.java2d.pipe.Region): void
                GCRectangles(arg0: int, arg1: long, arg2: sun.java2d.xr.GrowableRectArray): void
                setClipRectangles(arg0: int, arg1: sun.java2d.pipe.Region): void
                setGCExposures(arg0: long, arg1: boolean): void
                setGCForeground(arg0: long, arg1: int): void
                setPictureTransform(arg0: int, arg1: java.awt.geom.AffineTransform): void
                setPictureRepeat(arg0: int, arg1: int): void
                setFilter(arg0: int, arg1: int): void
                renderRectangle(arg0: int, arg1: byte, arg2: sun.java2d.xr.XRColor, arg3: int, arg4: int, arg5: int, arg6: int): void
                renderRectangles(arg0: int, arg1: byte, arg2: sun.java2d.xr.XRColor, arg3: sun.java2d.xr.GrowableRectArray): void
                renderComposite(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int): void
                XRenderCreateGlyphSet(arg0: int): int
                XRenderAddGlyphs(arg0: int, arg1: sun.font.GlyphList, arg2: java.util.List<sun.font.XRGlyphCacheEntry>, arg3: byte[]): void
                XRenderFreeGlyphs(arg0: int, arg1: int[]): void
                XRenderCompositeText(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: sun.java2d.xr.GrowableEltArray): void
                createRadialGradient(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float[], arg5: int[], arg6: int): int
                createLinearGradient(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D, arg2: float[], arg3: int[], arg4: int): int
                setGCMode(arg0: long, arg1: boolean): void
                renderCompositeTrapezoids(arg0: byte, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: sun.java2d.jules.TrapezoidList): void
            }
        }
    }
}