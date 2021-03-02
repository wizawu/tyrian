declare namespace java {
  namespace sql {

    interface ParameterMetaData extends java.sql.Wrapper {
      public static readonly parameterNoNulls: int
      public static readonly parameterNullable: int
      public static readonly parameterNullableUnknown: int
      public static readonly parameterModeUnknown: int
      public static readonly parameterModeIn: int
      public static readonly parameterModeInOut: int
      public static readonly parameterModeOut: int
      getParameterCount(): number
      isNullable(arg0: number | java.lang.Integer): number
      isSigned(arg0: number | java.lang.Integer): boolean
      getPrecision(arg0: number | java.lang.Integer): number
      getScale(arg0: number | java.lang.Integer): number
      getParameterType(arg0: number | java.lang.Integer): number
      getParameterTypeName(arg0: number | java.lang.Integer): java.lang.String
      getParameterClassName(arg0: number | java.lang.Integer): java.lang.String
      getParameterMode(arg0: number | java.lang.Integer): number
    }

  }
}
