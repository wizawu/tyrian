declare namespace sun {
    namespace print {
        abstract class RasterPrinterJob extends java.awt.print.PrinterJob {
            protected static readonly PRINTER: int
            protected static readonly FILE: int
            protected static readonly STREAM: int
            protected static readonly MAX_UNKNOWN_PAGES: int
            protected static readonly PD_ALLPAGES: int
            protected static readonly PD_SELECTION: int
            protected static readonly PD_PAGENUMS: int
            protected static readonly PD_NOSELECTION: int
            public static forcePDL: boolean
            public static forceRaster: boolean
            public static shapeTextProp: boolean
            protected mDocument: java.awt.print.Pageable
            protected performingPrinting: boolean
            protected userCancelled: boolean
            protected sidesAttr: javax.print.attribute.standard.Sides
            protected destinationAttr: string
            protected noJobSheet: boolean
            protected mDestType: int
            protected mDestination: string
            protected collateAttReq: boolean
            protected landscapeRotates270: boolean
            protected attributes: javax.print.attribute.PrintRequestAttributeSet
            protected myService: javax.print.PrintService
            public static debugPrint: boolean
            public constructor()
            protected abstract getXRes(): double
            protected abstract getYRes(): double
            protected abstract getPhysicalPrintableX(arg0: java.awt.print.Paper): double
            protected abstract getPhysicalPrintableY(arg0: java.awt.print.Paper): double
            protected abstract getPhysicalPrintableWidth(arg0: java.awt.print.Paper): double
            protected abstract getPhysicalPrintableHeight(arg0: java.awt.print.Paper): double
            protected abstract getPhysicalPageWidth(arg0: java.awt.print.Paper): double
            protected abstract getPhysicalPageHeight(arg0: java.awt.print.Paper): double
            protected abstract startPage(arg0: java.awt.print.PageFormat, arg1: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg2: int, arg3: boolean): void
            protected abstract endPage(arg0: java.awt.print.PageFormat, arg1: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg2: int): void
            protected abstract printBand(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int): void
            public saveState(arg0: java.awt.geom.AffineTransform, arg1: java.awt.Shape, arg2: java.awt.geom.Rectangle2D, arg3: double, arg4: double): void
            protected static lookupDefaultPrintService(): javax.print.PrintService
            public getPrintService(): javax.print.PrintService
            public setPrintService(arg0: javax.print.PrintService): void
            protected getMediaSize(arg0: javax.print.attribute.standard.Media, arg1: javax.print.PrintService, arg2: java.awt.print.PageFormat): javax.print.attribute.standard.MediaSize
            protected getDefaultPrintableArea(arg0: java.awt.print.PageFormat, arg1: double, arg2: double): javax.print.attribute.standard.MediaPrintableArea
            protected updatePageAttributes(arg0: javax.print.PrintService, arg1: java.awt.print.PageFormat): void
            protected updateAttributesWithPageFormat(arg0: javax.print.PrintService, arg1: java.awt.print.PageFormat, arg2: javax.print.attribute.PrintRequestAttributeSet): void
            public pageDialog(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
            public pageDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): java.awt.print.PageFormat
            protected getPageFormatFromAttributes(): java.awt.print.PageFormat
            public printDialog(arg0: javax.print.attribute.PrintRequestAttributeSet): boolean
            public printDialog(): boolean
            public setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda): void
            public setPrintable(arg0: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg1: java.awt.print.PageFormat): void
            public setPageable(arg0: java.awt.print.Pageable): void
            protected initPrinter(): void
            protected isSupportedValue(arg0: javax.print.attribute.Attribute, arg1: javax.print.attribute.PrintRequestAttributeSet): boolean
            protected setAttributes(arg0: javax.print.attribute.PrintRequestAttributeSet): void
            protected spoolToService(arg0: javax.print.PrintService, arg1: javax.print.attribute.PrintRequestAttributeSet): void
            public print(): void
            protected debug_println(arg0: java.lang.String | string): void
            public print(arg0: javax.print.attribute.PrintRequestAttributeSet): void
            protected validateDestination(arg0: java.lang.String | string): void
            protected validatePaper(arg0: java.awt.print.Paper, arg1: java.awt.print.Paper): void
            public defaultPage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
            public validatePage(arg0: java.awt.print.PageFormat): java.awt.print.PageFormat
            public setCopies(arg0: int): void
            public getCopies(): int
            protected getCopiesInt(): int
            public getUserName(): string
            protected getUserNameInt(): string
            public setJobName(arg0: java.lang.String | string): void
            public getJobName(): string
            protected getJobNameInt(): string
            protected setPageRange(arg0: int, arg1: int): void
            protected getFirstPage(): int
            protected getLastPage(): int
            protected setCollated(arg0: boolean): void
            protected isCollated(): boolean
            protected getSelectAttrib(): int
            protected getFromPageAttrib(): int
            protected getToPageAttrib(): int
            protected getMinPageAttrib(): int
            protected getMaxPageAttrib(): int
            protected abstract startDoc(): void
            protected abstract endDoc(): void
            protected abstract abortDoc(): void
            protected cancelDoc(): void
            protected getCollatedCopies(): int
            protected getNoncollatedCopies(): int
            protected printPage(arg0: java.awt.print.Pageable, arg1: int): int
            public cancel(): void
            public isCancelled(): boolean
            protected getPageable(): java.awt.print.Pageable
            protected createPathGraphics(arg0: sun.print.PeekGraphics, arg1: java.awt.print.PrinterJob, arg2: java.awt.print.Printable | java.awt.print.Printable$$Lambda, arg3: java.awt.print.PageFormat, arg4: int): java.awt.Graphics2D
            protected createPeekGraphics(arg0: java.awt.Graphics2D, arg1: java.awt.print.PrinterJob): sun.print.PeekGraphics
            protected initPrinterGraphics(arg0: java.awt.Graphics2D, arg1: java.awt.geom.Rectangle2D): void
            public checkAllowedToPrintToFile(): boolean
            protected removeControlChars(arg0: java.lang.String | string): string
            public static class: java.lang.Class<any>
        }
    }
}