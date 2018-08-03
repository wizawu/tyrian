declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace datatype {
                                class XMLGregorianCalendarImpl extends javax.xml.datatype.XMLGregorianCalendar implements java.io.Serializable , java.lang.Cloneable {
                                    public static readonly LEAP_YEAR_DEFAULT: javax.xml.datatype.XMLGregorianCalendar
                                    protected constructor(arg0: java.lang.String | string)
                                    public constructor()
                                    protected constructor(arg0: java.math.BigInteger, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.math.BigDecimal, arg7: int)
                                    public constructor(arg0: java.util.GregorianCalendar)
                                    public static createDateTime(arg0: java.math.BigInteger, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.math.BigDecimal, arg7: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createDateTime(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createDateTime(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createDate(arg0: int, arg1: int, arg2: int, arg3: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createTime(arg0: int, arg1: int, arg2: int, arg3: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createTime(arg0: int, arg1: int, arg2: int, arg3: java.math.BigDecimal, arg4: int): javax.xml.datatype.XMLGregorianCalendar
                                    public static createTime(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): javax.xml.datatype.XMLGregorianCalendar
                                    public getEon(): java.math.BigInteger
                                    public getYear(): int
                                    public getEonAndYear(): java.math.BigInteger
                                    public getMonth(): int
                                    public getDay(): int
                                    public getTimezone(): int
                                    public getHour(): int
                                    public getMinute(): int
                                    public getSecond(): int
                                    public getMillisecond(): int
                                    public getFractionalSecond(): java.math.BigDecimal
                                    public setYear(arg0: java.math.BigInteger): void
                                    public setYear(arg0: int): void
                                    public setMonth(arg0: int): void
                                    public setDay(arg0: int): void
                                    public setTimezone(arg0: int): void
                                    public setTime(arg0: int, arg1: int, arg2: int): void
                                    public setHour(arg0: int): void
                                    public setMinute(arg0: int): void
                                    public setSecond(arg0: int): void
                                    public setTime(arg0: int, arg1: int, arg2: int, arg3: java.math.BigDecimal): void
                                    public setTime(arg0: int, arg1: int, arg2: int, arg3: int): void
                                    public compare(arg0: javax.xml.datatype.XMLGregorianCalendar): int
                                    public normalize(): javax.xml.datatype.XMLGregorianCalendar
                                    public equals(arg0: java.lang.Object): boolean
                                    public hashCode(): int
                                    public static parse(arg0: java.lang.String | string): javax.xml.datatype.XMLGregorianCalendar
                                    public toXMLFormat(): string
                                    public getXMLSchemaType(): javax.xml.namespace.QName
                                    public isValid(): boolean
                                    public add(arg0: javax.xml.datatype.Duration): void
                                    public toGregorianCalendar(): java.util.GregorianCalendar
                                    public toGregorianCalendar(arg0: java.util.TimeZone, arg1: java.util.Locale, arg2: javax.xml.datatype.XMLGregorianCalendar): java.util.GregorianCalendar
                                    public getTimeZone(arg0: int): java.util.TimeZone
                                    public clone(): java.lang.Object
                                    public clear(): void
                                    public setMillisecond(arg0: int): void
                                    public setFractionalSecond(arg0: java.math.BigDecimal): void
                                    public reset(): void
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