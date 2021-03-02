declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class ImageInputStreamSpi extends javax.imageio.spi.IIOServiceProvider {
        protected inputClass: java.lang.Class<unknown>
        protected constructor()
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>)
        public getInputClass(): java.lang.Class<unknown>
        public canUseCacheFile(): boolean
        public needsCacheFile(): boolean
        public abstract createInputStreamInstance(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean, arg2: java.io.File): javax.imageio.stream.ImageInputStream
        public createInputStreamInstance(arg0: java.lang.Object | any): javax.imageio.stream.ImageInputStream
      }

    }
  }
}
