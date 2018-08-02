declare namespace sun {
    namespace awt {
        namespace image {
            class BufferedImageGraphicsConfig extends java.awt.GraphicsConfiguration {
                public static getConfig(arg0: java.awt.image.BufferedImage): sun.awt.image.BufferedImageGraphicsConfig
                public constructor(arg0: java.awt.image.BufferedImage, arg1: java.awt.Component)
                public getDevice(): java.awt.GraphicsDevice
                public createCompatibleImage(arg0: int, arg1: int): java.awt.image.BufferedImage
                public getColorModel(): java.awt.image.ColorModel
                public getColorModel(arg0: int): java.awt.image.ColorModel
                public getDefaultTransform(): java.awt.geom.AffineTransform
                public getNormalizingTransform(): java.awt.geom.AffineTransform
                public getBounds(): java.awt.Rectangle
                public static class: java.lang.Class<any>
            }
        }
    }
}