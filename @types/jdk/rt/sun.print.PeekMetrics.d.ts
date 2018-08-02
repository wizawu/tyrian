declare namespace sun {
    namespace print {
        class PeekMetrics {
            public constructor()
            public hasNonSolidColors(): boolean
            public hasCompositing(): boolean
            public hasText(): boolean
            public hasImages(): boolean
            public fill(arg0: java.awt.Graphics2D): void
            public draw(arg0: java.awt.Graphics2D): void
            public clear(arg0: java.awt.Graphics2D): void
            public drawText(arg0: java.awt.Graphics2D): void
            public drawText(arg0: java.awt.Graphics2D, arg1: java.awt.font.TextLayout): void
            public drawImage(arg0: java.awt.Graphics2D, arg1: java.awt.Image): void
            public drawImage(arg0: java.awt.Graphics2D, arg1: java.awt.image.RenderedImage): void
            public drawImage(arg0: java.awt.Graphics2D, arg1: java.awt.image.renderable.RenderableImage): void
            public static class: java.lang.Class<any>
        }
    }
}