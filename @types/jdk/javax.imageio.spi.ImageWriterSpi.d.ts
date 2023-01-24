declare namespace javax {
  namespace imageio {
    namespace spi {
      abstract class ImageWriterSpi extends javax.imageio.spi.ImageReaderWriterSpi {
        public static readonly STANDARD_OUTPUT_TYPE: java.lang.Class<unknown>[]
        protected outputTypes: java.lang.Class<unknown>[]
        protected readerSpiNames: java.lang.String[]
        protected constructor()
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String[] | string[],
          arg3: java.lang.String[] | string[],
          arg4: java.lang.String[] | string[],
          arg5: java.lang.String | string,
          arg6: java.lang.Class<unknown>[],
          arg7: java.lang.String[] | string[],
          arg8: boolean | java.lang.Boolean,
          arg9: java.lang.String | string,
          arg10: java.lang.String | string,
          arg11: java.lang.String[] | string[],
          arg12: java.lang.String[] | string[],
          arg13: boolean | java.lang.Boolean,
          arg14: java.lang.String | string,
          arg15: java.lang.String | string,
          arg16: java.lang.String[] | string[],
          arg17: java.lang.String[] | string[]
        )
        public isFormatLossless(): boolean
        public getOutputTypes(): java.lang.Class<unknown>[]
        public abstract canEncodeImage(arg0: javax.imageio.ImageTypeSpecifier): boolean
        public canEncodeImage(arg0: java.awt.image.RenderedImage): boolean
        public createWriterInstance(): javax.imageio.ImageWriter
        public abstract createWriterInstance(arg0: java.lang.Object | any): javax.imageio.ImageWriter
        public isOwnWriter(arg0: javax.imageio.ImageWriter): boolean
        public getImageReaderSpiNames(): java.lang.String[]
      }
    }
  }
}
