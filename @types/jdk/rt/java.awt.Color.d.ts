declare namespace java {
    namespace awt {
class Color implements java.awt.Paint , java.io.Serializable {
    public static white: java.awt.Color
    public static WHITE: java.awt.Color
    public static lightGray: java.awt.Color
    public static LIGHT_GRAY: java.awt.Color
    public static gray: java.awt.Color
    public static GRAY: java.awt.Color
    public static darkGray: java.awt.Color
    public static DARK_GRAY: java.awt.Color
    public static black: java.awt.Color
    public static BLACK: java.awt.Color
    public static red: java.awt.Color
    public static RED: java.awt.Color
    public static pink: java.awt.Color
    public static PINK: java.awt.Color
    public static orange: java.awt.Color
    public static ORANGE: java.awt.Color
    public static yellow: java.awt.Color
    public static YELLOW: java.awt.Color
    public static green: java.awt.Color
    public static GREEN: java.awt.Color
    public static magenta: java.awt.Color
    public static MAGENTA: java.awt.Color
    public static cyan: java.awt.Color
    public static CYAN: java.awt.Color
    public static blue: java.awt.Color
    public static BLUE: java.awt.Color
    public constructor(arg0: int, arg1: int, arg2: int)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: boolean)
    public constructor(arg0: float, arg1: float, arg2: float)
    public constructor(arg0: float, arg1: float, arg2: float, arg3: float)
    public constructor(arg0: java.awt.color.ColorSpace, arg1: float[], arg2: float)
    public getRed(): int
    public getGreen(): int
    public getBlue(): int
    public getAlpha(): int
    public getRGB(): int
    public brighter(): java.awt.Color
    public darker(): java.awt.Color
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static decode(arg0: java.lang.String | string): java.awt.Color
    public static getColor(arg0: java.lang.String | string): java.awt.Color
    public static getColor(arg0: java.lang.String | string, arg1: java.awt.Color): java.awt.Color
    public static getColor(arg0: java.lang.String | string, arg1: int): java.awt.Color
    public static HSBtoRGB(arg0: float, arg1: float, arg2: float): int
    public static RGBtoHSB(arg0: int, arg1: int, arg2: int, arg3: float[]): float[]
    public static getHSBColor(arg0: float, arg1: float, arg2: float): java.awt.Color
    public getRGBComponents(arg0: float[]): float[]
    public getRGBColorComponents(arg0: float[]): float[]
    public getComponents(arg0: float[]): float[]
    public getColorComponents(arg0: float[]): float[]
    public getComponents(arg0: java.awt.color.ColorSpace, arg1: float[]): float[]
    public getColorComponents(arg0: java.awt.color.ColorSpace, arg1: float[]): float[]
    public getColorSpace(): java.awt.color.ColorSpace
    public createContext(arg0: java.awt.image.ColorModel, arg1: java.awt.Rectangle, arg2: java.awt.geom.Rectangle2D, arg3: java.awt.geom.AffineTransform, arg4: java.awt.RenderingHints): java.awt.PaintContext
    public getTransparency(): int
    public static class: java.lang.Class<any>
}

    }
}