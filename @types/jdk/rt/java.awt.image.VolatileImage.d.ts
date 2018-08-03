declare namespace java {
    namespace awt {
        namespace image {
            abstract class VolatileImage extends java.awt.Image implements java.awt.Transparency {
                public static readonly IMAGE_OK: int
                public static readonly IMAGE_RESTORED: int
                public static readonly IMAGE_INCOMPATIBLE: int
                protected transparency: int
                public constructor()
                public abstract getSnapshot(): java.awt.image.BufferedImage
                public abstract getWidth(): int
                public abstract getHeight(): int
                public getSource(): java.awt.image.ImageProducer
                public getGraphics(): java.awt.Graphics
                public abstract createGraphics(): java.awt.Graphics2D
                public abstract validate(arg0: java.awt.GraphicsConfiguration): int
                public abstract contentsLost(): boolean
                public abstract getCapabilities(): java.awt.ImageCapabilities
                public getTransparency(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}