declare namespace sun {
    namespace awt {
        namespace image {
            class ImagingLib {
                public constructor()
                public static transformBI(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage, arg2: double[], arg3: int): int
                public static transformRaster(arg0: java.awt.image.Raster, arg1: java.awt.image.Raster, arg2: double[], arg3: int): int
                public static convolveBI(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage, arg2: java.awt.image.Kernel, arg3: int): int
                public static convolveRaster(arg0: java.awt.image.Raster, arg1: java.awt.image.Raster, arg2: java.awt.image.Kernel, arg3: int): int
                public static lookupByteBI(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage, arg2: byte[][]): int
                public static lookupByteRaster(arg0: java.awt.image.Raster, arg1: java.awt.image.Raster, arg2: byte[][]): int
                public static filter(arg0: java.awt.image.RasterOp, arg1: java.awt.image.Raster, arg2: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                public static filter(arg0: java.awt.image.BufferedImageOp, arg1: java.awt.image.BufferedImage, arg2: java.awt.image.BufferedImage): java.awt.image.BufferedImage
                public static class: java.lang.Class<any>
            }
        }
    }
}