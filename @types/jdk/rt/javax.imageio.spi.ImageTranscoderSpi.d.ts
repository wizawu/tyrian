declare namespace javax {
    namespace imageio {
        namespace spi {
            abstract class ImageTranscoderSpi extends javax.imageio.spi.IIOServiceProvider {
                protected constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public getReaderServiceProviderName(): string
                public getWriterServiceProviderName(): string
                public createTranscoderInstance(): javax.imageio.ImageTranscoder
                public static class: java.lang.Class<any>
            }
        }
    }
}