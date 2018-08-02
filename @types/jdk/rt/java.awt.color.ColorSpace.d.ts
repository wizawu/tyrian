declare namespace java {
    namespace awt {
        namespace color {
abstract class ColorSpace implements java.io.Serializable {
    public static TYPE_XYZ: int
    public static TYPE_Lab: int
    public static TYPE_Luv: int
    public static TYPE_YCbCr: int
    public static TYPE_Yxy: int
    public static TYPE_RGB: int
    public static TYPE_GRAY: int
    public static TYPE_HSV: int
    public static TYPE_HLS: int
    public static TYPE_CMYK: int
    public static TYPE_CMY: int
    public static TYPE_2CLR: int
    public static TYPE_3CLR: int
    public static TYPE_4CLR: int
    public static TYPE_5CLR: int
    public static TYPE_6CLR: int
    public static TYPE_7CLR: int
    public static TYPE_8CLR: int
    public static TYPE_9CLR: int
    public static TYPE_ACLR: int
    public static TYPE_BCLR: int
    public static TYPE_CCLR: int
    public static TYPE_DCLR: int
    public static TYPE_ECLR: int
    public static TYPE_FCLR: int
    public static CS_sRGB: int
    public static CS_LINEAR_RGB: int
    public static CS_CIEXYZ: int
    public static CS_PYCC: int
    public static CS_GRAY: int
    protected constructor(arg0: int, arg1: int)
    public static getInstance(arg0: int): java.awt.color.ColorSpace
    public isCS_sRGB(): boolean
    public toRGB(arg0: float[]): float[]
    public fromRGB(arg0: float[]): float[]
    public toCIEXYZ(arg0: float[]): float[]
    public fromCIEXYZ(arg0: float[]): float[]
    public getType(): int
    public getNumComponents(): int
    public getName(arg0: int): string
    public getMinValue(arg0: int): float
    public getMaxValue(arg0: int): float
    public static class: java.lang.Class<any>
}

        }
    }
}