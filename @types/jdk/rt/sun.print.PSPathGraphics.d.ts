declare namespace sun {
    namespace print {
        class PSPathGraphics extends sun.print.PathGraphics {
            public create(): java.awt.Graphics
            public fill(arg0: java.awt.Shape, arg1: java.awt.Color): void
            public drawString(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public drawString(arg0: java.lang.String | string, arg1: float, arg2: float): void
            protected canDrawStringToWidth(): boolean
            protected platformFontCount(arg0: java.awt.Font, arg1: java.lang.String | string): int
            protected drawString(arg0: java.lang.String | string, arg1: float, arg2: float, arg3: java.awt.Font, arg4: java.awt.font.FontRenderContext, arg5: float): void
            protected drawImageToPlatform(arg0: java.awt.Image, arg1: java.awt.geom.AffineTransform, arg2: java.awt.Color, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean): boolean
            public redrawRegion(arg0: java.awt.geom.Rectangle2D, arg1: double, arg2: double, arg3: java.awt.Shape, arg4: java.awt.geom.AffineTransform): void
            protected deviceFill(arg0: java.awt.geom.PathIterator, arg1: java.awt.Color): void
            protected deviceFrameRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected deviceDrawLine(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected deviceFillRect(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.awt.Color): void
            protected deviceClip(arg0: java.awt.geom.PathIterator): void
            public static class: java.lang.Class<any>
        }
    }
}