declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace common {
                    class ImageUtil {
                        public constructor()
                        public static createColorModel(arg0: java.awt.image.SampleModel): java.awt.image.ColorModel
                        public static getPackedBinaryData(arg0: java.awt.image.Raster, arg1: java.awt.Rectangle): byte[]
                        public static getUnpackedBinaryData(arg0: java.awt.image.Raster, arg1: java.awt.Rectangle): byte[]
                        public static setPackedBinaryData(arg0: byte[], arg1: java.awt.image.WritableRaster, arg2: java.awt.Rectangle): void
                        public static setUnpackedBinaryData(arg0: byte[], arg1: java.awt.image.WritableRaster, arg2: java.awt.Rectangle): void
                        public static isBinary(arg0: java.awt.image.SampleModel): boolean
                        public static createColorModel(arg0: java.awt.color.ColorSpace, arg1: java.awt.image.SampleModel): java.awt.image.ColorModel
                        public static getElementSize(arg0: java.awt.image.SampleModel): int
                        public static getTileSize(arg0: java.awt.image.SampleModel): long
                        public static getBandSize(arg0: java.awt.image.SampleModel): long
                        public static isIndicesForGrayscale(arg0: byte[], arg1: byte[], arg2: byte[]): boolean
                        public static convertObjectToString(arg0: java.lang.Object): string
                        public static canEncodeImage(arg0: javax.imageio.ImageWriter, arg1: javax.imageio.ImageTypeSpecifier): void
                        public static canEncodeImage(arg0: javax.imageio.ImageWriter, arg1: java.awt.image.ColorModel, arg2: java.awt.image.SampleModel): void
                        public static imageIsContiguous(arg0: java.awt.image.RenderedImage): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}