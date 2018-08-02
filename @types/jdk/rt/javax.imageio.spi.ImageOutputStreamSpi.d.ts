declare namespace javax {
    namespace imageio {
        namespace spi {
abstract class ImageOutputStreamSpi extends javax.imageio.spi.IIOServiceProvider {
    protected outputClass: java.lang.Class<any>
    protected constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class<any>)
    public getOutputClass(): java.lang.Class<any>
    public canUseCacheFile(): boolean
    public needsCacheFile(): boolean
    public createOutputStreamInstance(arg0: java.lang.Object, arg1: boolean, arg2: java.io.File): javax.imageio.stream.ImageOutputStream
    public createOutputStreamInstance(arg0: java.lang.Object): javax.imageio.stream.ImageOutputStream
    public static class: java.lang.Class<any>
}

        }
    }
}