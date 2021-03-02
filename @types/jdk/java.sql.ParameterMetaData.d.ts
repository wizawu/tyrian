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
      getParameterCount(): int
      isNullable(arg0: int): int
      isSigned(arg0: int): boolean
      getPrecision(arg0: int): int
      getScale(arg0: int): int
      getParameterType(arg0: int): int
      getParameterTypeName(arg0: int): java.lang.String
      getParameterClassName(arg0: int): java.lang.String
      getParameterMode(arg0: int): int
    }

  }
}
