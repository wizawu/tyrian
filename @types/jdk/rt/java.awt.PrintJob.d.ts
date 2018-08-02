declare namespace java {
    namespace awt {
        abstract class PrintJob {
            public constructor()
            public getGraphics(): java.awt.Graphics
            public getPageDimension(): java.awt.Dimension
            public getPageResolution(): int
            public lastPageFirst(): boolean
            public end(): void
            public finalize(): void
            public static class: java.lang.Class<any>
        }
    }
}