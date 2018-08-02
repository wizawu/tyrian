declare namespace sun {
    namespace java2d {
        namespace cmm {
            namespace lcms {
class LCMSTransform implements sun.java2d.cmm.ColorTransform {
    public constructor(arg0: java.awt.color.ICC_Profile, arg1: int, arg2: int)
    public constructor(arg0: sun.java2d.cmm.ColorTransform[])
    public getNumInComponents(): int
    public getNumOutComponents(): int
    public colorConvert(arg0: java.awt.image.BufferedImage, arg1: java.awt.image.BufferedImage): void
    public colorConvert(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster, arg2: float[], arg3: float[], arg4: float[], arg5: float[]): void
    public colorConvert(arg0: java.awt.image.Raster, arg1: java.awt.image.WritableRaster): void
    public colorConvert(arg0: short[], arg1: short[]): short[]
    public colorConvert(arg0: byte[], arg1: byte[]): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}