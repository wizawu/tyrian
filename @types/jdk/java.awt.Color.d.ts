declare namespace java {
  namespace awt {

    class Color implements java.awt.Paint, java.io.Serializable {
      public static readonly white: java.awt.Color
      public static readonly WHITE: java.awt.Color
      public static readonly lightGray: java.awt.Color
      public static readonly LIGHT_GRAY: java.awt.Color
      public static readonly gray: java.awt.Color
      public static readonly GRAY: java.awt.Color
      public static readonly darkGray: java.awt.Color
      public static readonly DARK_GRAY: java.awt.Color
      public static readonly black: java.awt.Color
      public static readonly BLACK: java.awt.Color
      public static readonly red: java.awt.Color
      public static readonly RED: java.awt.Color
      public static readonly pink: java.awt.Color
      public static readonly PINK: java.awt.Color
      public static readonly orange: java.awt.Color
      public static readonly ORANGE: java.awt.Color
      public static readonly yellow: java.awt.Color
      public static readonly YELLOW: java.awt.Color
      public static readonly green: java.awt.Color
      public static readonly GREEN: java.awt.Color
      public static readonly magenta: java.awt.Color
      public static readonly MAGENTA: java.awt.Color
      public static readonly cyan: java.awt.Color
      public static readonly CYAN: java.awt.Color
      public static readonly blue: java.awt.Color
      public static readonly BLUE: java.awt.Color
      value: int
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
      public toString(): java.lang.String
      public static decode(arg0: java.lang.String): java.awt.Color
      public static getColor(arg0: java.lang.String): java.awt.Color
      public static getColor(arg0: java.lang.String, arg1: java.awt.Color): java.awt.Color
      public static getColor(arg0: java.lang.String, arg1: int): java.awt.Color
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
    }

  }
}
