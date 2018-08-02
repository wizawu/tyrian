declare namespace java {
    namespace awt {
        namespace image {
            abstract class VolatileImage extends java.awt.Image implements java.awt.Transparency {
                public static IMAGE_OK: int
                public static IMAGE_RESTORED: int
                public static IMAGE_INCOMPATIBLE: int
                protected transparency: int
                public constructor()
                public getSnapshot(): java.awt.image.BufferedImage
                public getWidth(): int
                public getHeight(): int
                public getSource(): java.awt.image.ImageProducer
                public getGraphics(): java.awt.Graphics
                public createGraphics(): java.awt.Graphics2D
                public validate(arg0: java.awt.GraphicsConfiguration): int
                public contentsLost(): boolean
                public getCapabilities(): java.awt.ImageCapabilities
                public getTransparency(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}