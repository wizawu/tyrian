declare namespace javax {
    namespace imageio {
        namespace spi {
            abstract class ImageWriterSpi extends javax.imageio.spi.ImageReaderWriterSpi {
                public static STANDARD_OUTPUT_TYPE: java.lang.Class[]
                protected outputTypes: java.lang.Class[]
                protected readerSpiNames: java.lang.String[]
                protected constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: java.lang.String[], arg4: java.lang.String[], arg5: java.lang.String | string, arg6: java.lang.Class[], arg7: java.lang.String[], arg8: boolean, arg9: java.lang.String | string, arg10: java.lang.String | string, arg11: java.lang.String[], arg12: java.lang.String[], arg13: boolean, arg14: java.lang.String | string, arg15: java.lang.String | string, arg16: java.lang.String[], arg17: java.lang.String[])
                public isFormatLossless(): boolean
                public getOutputTypes(): java.lang.Class[]
                public canEncodeImage(arg0: javax.imageio.ImageTypeSpecifier): boolean
                public canEncodeImage(arg0: java.awt.image.RenderedImage): boolean
                public createWriterInstance(): javax.imageio.ImageWriter
                public createWriterInstance(arg0: java.lang.Object): javax.imageio.ImageWriter
                public isOwnWriter(arg0: javax.imageio.ImageWriter): boolean
                public getImageReaderSpiNames(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}