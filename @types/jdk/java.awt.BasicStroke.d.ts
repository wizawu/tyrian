declare namespace java {
  namespace awt {
    class BasicStroke implements java.awt.Stroke {
      public static readonly JOIN_MITER: int
      public static readonly JOIN_ROUND: int
      public static readonly JOIN_BEVEL: int
      public static readonly CAP_BUTT: int
      public static readonly CAP_ROUND: int
      public static readonly CAP_SQUARE: int
      width: float
      join: int
      cap: int
      miterlimit: float
      dash: float[]
      dash_phase: float
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Float,
        arg4: number[] | java.lang.Float[],
        arg5: number | java.lang.Float
      )
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Float
      )
      public constructor(
        arg0: number | java.lang.Float,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(arg0: number | java.lang.Float)
      public constructor()
      public createStrokedShape(arg0: java.awt.Shape): java.awt.Shape
      public getLineWidth(): number
      public getEndCap(): number
      public getLineJoin(): number
      public getMiterLimit(): number
      public getDashArray(): number[]
      public getDashPhase(): number
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
    }
  }
}
