declare namespace sun {
    namespace java2d {
        namespace loops {
            abstract class PixelWriter {
                protected dstRast: java.awt.image.WritableRaster
                public setRaster(arg0: java.awt.image.WritableRaster): void
                public abstract writePixel(arg0: int, arg1: int): void
                public static class: java.lang.Class<any>
            }
            interface PixelWriter$$Lambda {
                (arg0: int, arg1: int): void
            }
        }
    }
}