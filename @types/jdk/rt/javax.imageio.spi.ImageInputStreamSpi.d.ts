declare namespace javax {
    namespace imageio {
        namespace spi {
            abstract class ImageInputStreamSpi extends javax.imageio.spi.IIOServiceProvider {
                protected inputClass: java.lang.Class<any>
                protected constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class<any>)
                public getInputClass(): java.lang.Class<any>
                public canUseCacheFile(): boolean
                public needsCacheFile(): boolean
                public createInputStreamInstance(arg0: java.lang.Object, arg1: boolean, arg2: java.io.File): javax.imageio.stream.ImageInputStream
                public createInputStreamInstance(arg0: java.lang.Object): javax.imageio.stream.ImageInputStream
                public static class: java.lang.Class<any>
            }
        }
    }
}