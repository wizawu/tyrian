declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace datatype {
                                class DurationImpl extends javax.xml.datatype.Duration implements java.io.Serializable {
                                    protected signum: int
                                    protected years: java.math.BigInteger
                                    protected months: java.math.BigInteger
                                    protected days: java.math.BigInteger
                                    protected hours: java.math.BigInteger
                                    protected minutes: java.math.BigInteger
                                    protected seconds: java.math.BigDecimal
                                    public getSign(): int
                                    protected calcSignum(arg0: boolean): int
                                    protected constructor(arg0: boolean, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger, arg5: java.math.BigInteger, arg6: java.math.BigDecimal)
                                    protected static testNonNegative(arg0: java.math.BigInteger, arg1: javax.xml.datatype.DatatypeConstants$Field): void
                                    protected static testNonNegative(arg0: java.math.BigDecimal, arg1: javax.xml.datatype.DatatypeConstants$Field): void
                                    protected constructor(arg0: boolean, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
                                    protected static wrap(arg0: int): java.math.BigInteger
                                    protected constructor(arg0: long)
                                    protected constructor(arg0: java.lang.String | string)
                                    public compare(arg0: javax.xml.datatype.Duration): int
                                    public hashCode(): int
                                    public toString(): string
                                    public isSet(arg0: javax.xml.datatype.DatatypeConstants$Field): boolean
                                    public getField(arg0: javax.xml.datatype.DatatypeConstants$Field): java.lang.Number
                                    public getYears(): int
                                    public getMonths(): int
                                    public getDays(): int
                                    public getHours(): int
                                    public getMinutes(): int
                                    public getSeconds(): int
                                    public getTimeInMillis(arg0: java.util.Calendar): long
                                    public getTimeInMillis(arg0: java.util.Date): long
                                    public normalizeWith(arg0: java.util.Calendar): javax.xml.datatype.Duration
                                    public multiply(arg0: int): javax.xml.datatype.Duration
                                    public multiply(arg0: java.math.BigDecimal): javax.xml.datatype.Duration
                                    public add(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
                                    public subtract(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
                                    public negate(): javax.xml.datatype.Duration
                                    public signum(): int
                                    public addTo(arg0: java.util.Calendar): void
                                    public addTo(arg0: java.util.Date): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}