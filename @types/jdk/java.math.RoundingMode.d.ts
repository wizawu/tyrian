declare namespace java {
  namespace math {
    class RoundingMode extends java.lang.Enum<java.math.RoundingMode> {
      public static readonly UP: java.math.RoundingMode
      public static readonly DOWN: java.math.RoundingMode
      public static readonly CEILING: java.math.RoundingMode
      public static readonly FLOOR: java.math.RoundingMode
      public static readonly HALF_UP: java.math.RoundingMode
      public static readonly HALF_DOWN: java.math.RoundingMode
      public static readonly HALF_EVEN: java.math.RoundingMode
      public static readonly UNNECESSARY: java.math.RoundingMode
      readonly oldMode: int
      public static values(): java.math.RoundingMode[]
      public static valueOf(arg0: java.lang.String | string): java.math.RoundingMode
      public static valueOf(arg0: number | java.lang.Integer): java.math.RoundingMode
    }
  }
}
