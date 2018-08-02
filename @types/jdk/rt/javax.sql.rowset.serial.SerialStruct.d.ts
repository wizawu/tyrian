declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
class SerialStruct implements java.sql.Struct , java.io.Serializable , java.lang.Cloneable {
    public constructor(arg0: java.sql.Struct, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
    public constructor(arg0: java.sql.SQLData, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
    public getSQLTypeName(): string
    public getAttributes(): java.lang.Object[]
    public getAttributes(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object[]
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}