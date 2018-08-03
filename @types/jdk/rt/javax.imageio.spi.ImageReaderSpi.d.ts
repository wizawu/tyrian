declare namespace javax {
    namespace imageio {
        namespace spi {
            abstract class ImageReaderSpi extends javax.imageio.spi.ImageReaderWriterSpi {
                public static readonly STANDARD_INPUT_TYPE: java.lang.Class[]
                protected inputTypes: java.lang.Class[]
                protected writerSpiNames: java.lang.String[]
                protected constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: java.lang.String[], arg4: java.lang.String[], arg5: java.lang.String | string, arg6: java.lang.Class[], arg7: java.lang.String[], arg8: boolean, arg9: java.lang.String | string, arg10: java.lang.String | string, arg11: java.lang.String[], arg12: java.lang.String[], arg13: boolean, arg14: java.lang.String | string, arg15: java.lang.String | string, arg16: java.lang.String[], arg17: java.lang.String[])
                public getInputTypes(): java.lang.Class[]
                public abstract canDecodeInput(arg0: java.lang.Object): boolean
                public createReaderInstance(): javax.imageio.ImageReader
                public abstract createReaderInstance(arg0: java.lang.Object): javax.imageio.ImageReader
                public isOwnReader(arg0: javax.imageio.ImageReader): boolean
                public getImageWriterSpiNames(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}