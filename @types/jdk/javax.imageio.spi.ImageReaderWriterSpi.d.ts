declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class ImageReaderWriterSpi extends javax.imageio.spi.IIOServiceProvider {
        protected names: java.lang.String[]
        protected suffixes: java.lang.String[]
        protected MIMETypes: java.lang.String[]
        protected pluginClassName: java.lang.String
        protected supportsStandardStreamMetadataFormat: boolean
        protected nativeStreamMetadataFormatName: java.lang.String
        protected nativeStreamMetadataFormatClassName: java.lang.String
        protected extraStreamMetadataFormatNames: java.lang.String[]
        protected extraStreamMetadataFormatClassNames: java.lang.String[]
        protected supportsStandardImageMetadataFormat: boolean
        protected nativeImageMetadataFormatName: java.lang.String
        protected nativeImageMetadataFormatClassName: java.lang.String
        protected extraImageMetadataFormatNames: java.lang.String[]
        protected extraImageMetadataFormatClassNames: java.lang.String[]
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String[], arg3: java.lang.String[], arg4: java.lang.String[], arg5: java.lang.String, arg6: boolean, arg7: java.lang.String, arg8: java.lang.String, arg9: java.lang.String[], arg10: java.lang.String[], arg11: boolean, arg12: java.lang.String, arg13: java.lang.String, arg14: java.lang.String[], arg15: java.lang.String[])
        public constructor()
        public getFormatNames(): java.lang.String[]
        public getFileSuffixes(): java.lang.String[]
        public getMIMETypes(): java.lang.String[]
        public getPluginClassName(): java.lang.String
        public isStandardStreamMetadataFormatSupported(): boolean
        public getNativeStreamMetadataFormatName(): java.lang.String
        public getExtraStreamMetadataFormatNames(): java.lang.String[]
        public isStandardImageMetadataFormatSupported(): boolean
        public getNativeImageMetadataFormatName(): java.lang.String
        public getExtraImageMetadataFormatNames(): java.lang.String[]
        public getStreamMetadataFormat(arg0: java.lang.String): javax.imageio.metadata.IIOMetadataFormat
        public getImageMetadataFormat(arg0: java.lang.String): javax.imageio.metadata.IIOMetadataFormat
      }

    }
  }
}
