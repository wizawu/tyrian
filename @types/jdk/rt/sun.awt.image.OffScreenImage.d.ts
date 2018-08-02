declare namespace sun {
    namespace awt {
        namespace image {
            class OffScreenImage extends java.awt.image.BufferedImage {
                protected c: java.awt.Component
                public constructor(arg0: java.awt.Component, arg1: java.awt.image.ColorModel, arg2: java.awt.image.WritableRaster, arg3: boolean)
                public getGraphics(): java.awt.Graphics
                public createGraphics(): java.awt.Graphics2D
                public getSource(): java.awt.image.ImageProducer
                public static class: java.lang.Class<any>
            }
        }
    }
}