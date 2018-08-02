declare namespace java {
    namespace awt {
        abstract class GraphicsConfiguration {
            protected constructor()
            public getDevice(): java.awt.GraphicsDevice
            public createCompatibleImage(arg0: int, arg1: int): java.awt.image.BufferedImage
            public createCompatibleImage(arg0: int, arg1: int, arg2: int): java.awt.image.BufferedImage
            public createCompatibleVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
            public createCompatibleVolatileImage(arg0: int, arg1: int, arg2: int): java.awt.image.VolatileImage
            public createCompatibleVolatileImage(arg0: int, arg1: int, arg2: java.awt.ImageCapabilities): java.awt.image.VolatileImage
            public createCompatibleVolatileImage(arg0: int, arg1: int, arg2: java.awt.ImageCapabilities, arg3: int): java.awt.image.VolatileImage
            public getColorModel(): java.awt.image.ColorModel
            public getColorModel(arg0: int): java.awt.image.ColorModel
            public getDefaultTransform(): java.awt.geom.AffineTransform
            public getNormalizingTransform(): java.awt.geom.AffineTransform
            public getBounds(): java.awt.Rectangle
            public getBufferCapabilities(): java.awt.BufferCapabilities
            public getImageCapabilities(): java.awt.ImageCapabilities
            public isTranslucencyCapable(): boolean
            public static class: java.lang.Class<any>
        }
    }
}