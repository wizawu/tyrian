declare namespace sun {
    namespace awt {
        namespace image {
abstract class AbstractMultiResolutionImage extends java.awt.Image implements sun.awt.image.MultiResolutionImage {
    public constructor()
    public getWidth(arg0: java.awt.image.ImageObserver): int
    public getHeight(arg0: java.awt.image.ImageObserver): int
    public getSource(): java.awt.image.ImageProducer
    public getGraphics(): java.awt.Graphics
    public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver): java.lang.Object
    protected getBaseImage(): java.awt.Image
    public static class: java.lang.Class<any>
}

        }
    }
}