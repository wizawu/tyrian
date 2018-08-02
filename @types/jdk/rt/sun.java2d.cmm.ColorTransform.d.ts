declare namespace sun {
    namespace java2d {
        namespace cmm {
interface ColorTransform {
    Any: int
    In: int
    Out: int
    Gamut: int
    Simulation: int
    getNumInComponents(): int
    getNumOutComponents(): int
    colorConvert(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): void
    colorConvert(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster, arg2: float[], arg3: float[], arg4: float[], arg5: float[]): void
    colorConvert(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): void
    colorConvert(arg0: short[], arg1: short[]): short[]
    colorConvert(arg0: byte[], arg1: byte[]): byte[]
}

        }
    }
}