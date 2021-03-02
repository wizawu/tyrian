declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class ImageOutputStreamSpi extends javax.imageio.spi.IIOServiceProvider {
        protected outputClass: java.lang.Class<unknown>
        protected constructor()
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Class<unknown>)
        public getOutputClass(): java.lang.Class<unknown>
        public canUseCacheFile(): boolean
        public needsCacheFile(): boolean
        public abstract createOutputStreamInstance(arg0: java.lang.Object, arg1: boolean, arg2: java.io.File): javax.imageio.stream.ImageOutputStream
        public createOutputStreamInstance(arg0: java.lang.Object): javax.imageio.stream.ImageOutputStream
      }

    }
  }
}
