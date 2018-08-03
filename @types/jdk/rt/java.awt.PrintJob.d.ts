declare namespace java {
    namespace awt {
        abstract class PrintJob {
            public constructor()
            public abstract getGraphics(): java.awt.Graphics
            public abstract getPageDimension(): java.awt.Dimension
            public abstract getPageResolution(): int
            public abstract lastPageFirst(): boolean
            public abstract end(): void
            public finalize(): void
            public static class: java.lang.Class<any>
        }
    }
}