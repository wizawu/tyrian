declare namespace javax {
  namespace imageio {
    namespace spi {
      abstract class ImageReaderSpi extends javax.imageio.spi.ImageReaderWriterSpi {
        public static readonly STANDARD_INPUT_TYPE: java.lang.Class<unknown>[]
        protected inputTypes: java.lang.Class<unknown>[]
        protected writerSpiNames: java.lang.String[]
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
        public getInputTypes(): java.lang.Class<unknown>[]
        public abstract canDecodeInput(arg0: java.lang.Object | any): boolean
        public createReaderInstance(): javax.imageio.ImageReader
        public abstract createReaderInstance(arg0: java.lang.Object | any): javax.imageio.ImageReader
        public isOwnReader(arg0: javax.imageio.ImageReader): boolean
        public getImageWriterSpiNames(): java.lang.String[]
      }
    }
  }
}
