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
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: number | java.lang.Float)
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: number | java.lang.Float,
        arg3: number | java.lang.Float
      )
      public constructor(
        arg0: java.awt.color.ColorSpace,
        arg1: number[] | java.lang.Float[],
        arg2: number | java.lang.Float
      )
      public getRed(): number
      public getGreen(): number
      public getBlue(): number
      public getAlpha(): number
      public getRGB(): number
      public brighter(): java.awt.Color
      public darker(): java.awt.Color
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
      public static decode(arg0: java.lang.String | string): java.awt.Color
      public static getColor(arg0: java.lang.String | string): java.awt.Color
      public static getColor(arg0: java.lang.String | string, arg1: java.awt.Color): java.awt.Color
      public static getColor(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.awt.Color
      public static HSBtoRGB(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: number | java.lang.Float
      ): number
      public static RGBtoHSB(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number[] | java.lang.Float[]
      ): number[]
      public static getHSBColor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Float,
        arg2: number | java.lang.Float
      ): java.awt.Color
      public getRGBComponents(arg0: number[] | java.lang.Float[]): number[]
      public getRGBColorComponents(arg0: number[] | java.lang.Float[]): number[]
      public getComponents(arg0: number[] | java.lang.Float[]): number[]
      public getColorComponents(arg0: number[] | java.lang.Float[]): number[]
      public getComponents(arg0: java.awt.color.ColorSpace, arg1: number[] | java.lang.Float[]): number[]
      public getColorComponents(arg0: java.awt.color.ColorSpace, arg1: number[] | java.lang.Float[]): number[]
      public getColorSpace(): java.awt.color.ColorSpace
      public createContext(
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.Rectangle,
        arg2: java.awt.geom.Rectangle2D,
        arg3: java.awt.geom.AffineTransform,
        arg4: java.awt.RenderingHints
      ): java.awt.PaintContext
      public getTransparency(): number
    }
  }
}
