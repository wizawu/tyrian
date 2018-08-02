declare namespace java {
    namespace sql {
        interface Struct {
            getSQLTypeName(): string
            getAttributes(): java.lang.Object[]
            getAttributes(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object[]
        }
    }
}