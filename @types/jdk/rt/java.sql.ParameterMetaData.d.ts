declare namespace java {
    namespace sql {
        interface ParameterMetaData extends java.sql.Wrapper {
            parameterNoNulls: int
            parameterNullable: int
            parameterNullableUnknown: int
            parameterModeUnknown: int
            parameterModeIn: int
            parameterModeInOut: int
            parameterModeOut: int
            getParameterCount(): int
            isNullable(arg0: int): int
            isSigned(arg0: int): boolean
            getPrecision(arg0: int): int
            getScale(arg0: int): int
            getParameterType(arg0: int): int
            getParameterTypeName(arg0: int): string
            getParameterClassName(arg0: int): string
            getParameterMode(arg0: int): int
        }
    }
}