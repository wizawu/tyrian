declare namespace sun {
    namespace java2d {
        namespace cmm {
            namespace lcms {
class LCMSImageLayout {
    public static SWAPFIRST: int
    public static DOSWAP: int
    public static PT_RGB_8: int
    public static PT_GRAY_8: int
    public static PT_GRAY_16: int
    public static PT_RGBA_8: int
    public static PT_ARGB_8: int
    public static PT_BGR_8: int
    public static PT_ABGR_8: int
    public static PT_BGRA_8: int
    public static DT_BYTE: int
    public static DT_SHORT: int
    public static DT_INT: int
    public static DT_DOUBLE: int
    public static BYTES_SH(arg0: int): int
    public static EXTRA_SH(arg0: int): int
    public static CHANNELS_SH(arg0: int): int
    public constructor(arg0: byte[], arg1: int, arg2: int, arg3: int)
    public constructor(arg0: short[], arg1: int, arg2: int, arg3: int)
    public constructor(arg0: int[], arg1: int, arg2: int, arg3: int)
    public constructor(arg0: double[], arg1: int, arg2: int, arg3: int)
    public static createImageLayout(arg0: java.awt.image.BufferedImage): sun.java2d.cmm.lcms.LCMSImageLayout
    public static createImageLayout(arg0: java.awt.image.Raster): sun.java2d.cmm.lcms.LCMSImageLayout
    public static class: java.lang.Class<any>
}

            }
        }
    }
}