declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class ImageTranscoderSpi extends javax.imageio.spi.IIOServiceProvider {
        protected constructor()
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public abstract getReaderServiceProviderName(): java.lang.String
        public abstract getWriterServiceProviderName(): java.lang.String
        public abstract createTranscoderInstance(): javax.imageio.ImageTranscoder
      }

    }
  }
}
