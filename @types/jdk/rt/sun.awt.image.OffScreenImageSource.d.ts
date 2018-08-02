declare namespace sun {
    namespace awt {
        namespace image {
class OffScreenImageSource implements java.awt.image.ImageProducer {
    public constructor(arg0: java.awt.image.BufferedImage, arg1: java.util.Hashtable)
    public constructor(arg0: java.awt.image.BufferedImage)
    public addConsumer(arg0: java.awt.image.ImageConsumer): void
    public isConsumer(arg0: java.awt.image.ImageConsumer): boolean
    public removeConsumer(arg0: java.awt.image.ImageConsumer): void
    public startProduction(arg0: java.awt.image.ImageConsumer): void
    public requestTopDownLeftRightResend(arg0: java.awt.image.ImageConsumer): void
    public static class: java.lang.Class<any>
}

        }
    }
}