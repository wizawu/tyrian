declare namespace java {
    namespace sql {
        interface Ref {
            getBaseTypeName(): string
            getObject(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getObject(): java.lang.Object
            setObject(arg0: java.lang.Object): void
        }
    }
}