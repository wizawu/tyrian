declare namespace sun {
    namespace awt {
        namespace image {
            class ToolkitImage extends java.awt.Image {
                protected constructor()
                public constructor(arg0: java.awt.image.ImageProducer)
                public getSource(): java.awt.image.ImageProducer
                public getWidth(): int
                public getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public getHeight(): int
                public getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): java.lang.Object
                public hasError(): boolean
                public check(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
                public preload(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): void
                public flush(): void
                protected makeImageRep(): sun.awt.image.ImageRepresentation
                public getImageRep(): sun.awt.image.ImageRepresentation
                public getGraphics(): java.awt.Graphics
                public getColorModel(): java.awt.image.ColorModel
                public getBufferedImage(): java.awt.image.BufferedImage
                public setAccelerationPriority(arg0: float): void
                public static class: java.lang.Class<any>
            }
        }
    }
}