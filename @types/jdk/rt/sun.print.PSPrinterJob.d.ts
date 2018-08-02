declare namespace sun {
    namespace print {
        class PSPrinterJob extends sun.print.RasterPrinterJob {
            protected static FILL_EVEN_ODD: int
            protected static FILL_WINDING: int
            public constructor()
            public printDialog(): boolean
            protected startDoc(): void
            protected abortDoc(): void
            protected endDoc(): void
            protected startPage(arg0: java.awt.print.PageFormat, arg1: java.awt.print.Printable, arg2: int, arg3: boolean): void
            protected endPage(arg0: java.awt.print.PageFormat, arg1: java.awt.print.Printable, arg2: int): void
            protected drawImageBGR(arg0: byte[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: int, arg10: int): void
            protected printBand(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int): void
            protected createPathGraphics(arg0: sun.print.PeekGraphics, arg1: java.awt.print.PrinterJob, arg2: java.awt.print.Printable, arg3: java.awt.print.PageFormat, arg4: int): java.awt.Graphics2D
            protected selectClipPath(): void
            protected setClip(arg0: java.awt.Shape): void
            protected setTransform(arg0: java.awt.geom.AffineTransform): void
            protected setFont(arg0: java.awt.Font): boolean
            protected platformFontCount(arg0: java.awt.Font, arg1: java.lang.String | string): int
            protected textOut(arg0: java.awt.Graphics, arg1: java.lang.String | string, arg2: float, arg3: float, arg4: java.awt.Font, arg5: java.awt.font.FontRenderContext, arg6: float): boolean
            protected setFillMode(arg0: int): void
            protected setColor(arg0: java.awt.Color): void
            protected fillPath(): void
            protected beginPath(): void
            protected closeSubpath(): void
            protected moveTo(arg0: float, arg1: float): void
            protected lineTo(arg0: float, arg1: float): void
            protected bezierTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
            protected getPenX(): float
            protected getPenY(): float
            protected getXRes(): double
            protected getYRes(): double
            protected getPhysicalPrintableX(arg0: java.awt.print.Paper): double
            protected getPhysicalPrintableY(arg0: java.awt.print.Paper): double
            protected getPhysicalPrintableWidth(arg0: java.awt.print.Paper): double
            protected getPhysicalPrintableHeight(arg0: java.awt.print.Paper): double
            protected getPhysicalPageWidth(arg0: java.awt.print.Paper): double
            protected getPhysicalPageHeight(arg0: java.awt.print.Paper): double
            protected getNoncollatedCopies(): int
            protected getCollatedCopies(): int
            protected deviceFill(arg0: java.awt.geom.PathIterator, arg1: java.awt.Color, arg2: java.awt.geom.AffineTransform, arg3: java.awt.Shape): void
            public static class: java.lang.Class<any>
        }
    }
}