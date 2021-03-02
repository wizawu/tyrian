declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class ImageReaderSpi extends javax.imageio.spi.ImageReaderWriterSpi {
        public static readonly STANDARD_INPUT_TYPE: java.lang.Class<unknown>[]
        protected inputTypes: java.lang.Class<unknown>[]
        protected writerSpiNames: java.lang.String[]
        protected constructor()
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String[], arg3: java.lang.String[], arg4: java.lang.String[], arg5: java.lang.String, arg6: java.lang.Class<unknown>[], arg7: java.lang.String[], arg8: boolean, arg9: java.lang.String, arg10: java.lang.String, arg11: java.lang.String[], arg12: java.lang.String[], arg13: boolean, arg14: java.lang.String, arg15: java.lang.String, arg16: java.lang.String[], arg17: java.lang.String[])
        public getInputTypes(): java.lang.Class<unknown>[]
        public abstract canDecodeInput(arg0: java.lang.Object): boolean
        public createReaderInstance(): javax.imageio.ImageReader
        public abstract createReaderInstance(arg0: java.lang.Object): javax.imageio.ImageReader
        public isOwnReader(arg0: javax.imageio.ImageReader): boolean
        public getImageWriterSpiNames(): java.lang.String[]
      }

    }
  }
}
