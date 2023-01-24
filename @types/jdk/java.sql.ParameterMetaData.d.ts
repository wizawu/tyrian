declare namespace java {
  namespace sql {
    interface ParameterMetaData extends java.sql.Wrapper {
      readonly parameterNoNulls: int
      readonly parameterNullable: int
      readonly parameterNullableUnknown: int
      readonly parameterModeUnknown: int
      readonly parameterModeIn: int
      readonly parameterModeInOut: int
      readonly parameterModeOut: int
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
