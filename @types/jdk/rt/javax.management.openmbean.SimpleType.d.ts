declare namespace javax {
    namespace management {
        namespace openmbean {
class SimpleType<T> extends javax.management.openmbean.OpenType<T> {
    public static VOID: javax.management.openmbean.SimpleType<java.lang.Void>
    public static BOOLEAN: javax.management.openmbean.SimpleType<java.lang.Boolean>
    public static CHARACTER: javax.management.openmbean.SimpleType<java.lang.Character>
    public static BYTE: javax.management.openmbean.SimpleType<java.lang.Byte>
    public static SHORT: javax.management.openmbean.SimpleType<java.lang.Short>
    public static INTEGER: javax.management.openmbean.SimpleType<java.lang.Integer>
    public static LONG: javax.management.openmbean.SimpleType<java.lang.Long>
    public static FLOAT: javax.management.openmbean.SimpleType<java.lang.Float>
    public static DOUBLE: javax.management.openmbean.SimpleType<java.lang.Double>
    public static STRING: javax.management.openmbean.SimpleType<java.lang.String>
    public static BIGDECIMAL: javax.management.openmbean.SimpleType<java.math.BigDecimal>
    public static BIGINTEGER: javax.management.openmbean.SimpleType<java.math.BigInteger>
    public static DATE: javax.management.openmbean.SimpleType<java.util.Date>
    public static OBJECTNAME: javax.management.openmbean.SimpleType<javax.management.ObjectName>
    public isValue(arg0: java.lang.Object): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public readResolve(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}