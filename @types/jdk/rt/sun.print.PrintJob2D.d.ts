declare namespace sun {
    namespace print {
        class PrintJob2D extends java.awt.PrintJob implements java.awt.print.Printable , java.lang.Runnable {
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties)
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes)
            public printDialog(): boolean
            public getGraphics(): java.awt.Graphics
            public getPageDimension(): java.awt.Dimension
            public getPageResolution(): int
            public lastPageFirst(): boolean
            public end(): void
            public finalize(): void
            public print(arg0: java.awt.Graphics, arg1: java.awt.print.PageFormat, arg2: int): int
            public run(): void
            public static mapMedia(arg0: java.awt.PageAttributes$MediaType): javax.print.attribute.standard.MediaSizeName
            public static unMapMedia(arg0: javax.print.attribute.standard.MediaSizeName): java.awt.PageAttributes$MediaType
            public static class: java.lang.Class<any>
        }
        class PrintJob2D$$Lambda extends java.awt.PrintJob implements java.awt.print.Printable , java.lang.Runnable {
            public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties)
        }
    }
}