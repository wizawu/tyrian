declare namespace javax {
    namespace xml {
        namespace datatype {
abstract class XMLGregorianCalendar implements java.lang.Cloneable {
    public constructor()
    public clear(): void
    public reset(): void
    public setYear(arg0: java.math.BigInteger): void
    public setYear(arg0: int): void
    public setMonth(arg0: int): void
    public setDay(arg0: int): void
    public setTimezone(arg0: int): void
    public setTime(arg0: int, arg1: int, arg2: int): void
    public setHour(arg0: int): void
    public setMinute(arg0: int): void
    public setSecond(arg0: int): void
    public setMillisecond(arg0: int): void
    public setFractionalSecond(arg0: java.math.BigDecimal): void
    public setTime(arg0: int, arg1: int, arg2: int, arg3: java.math.BigDecimal): void
    public setTime(arg0: int, arg1: int, arg2: int, arg3: int): void
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
    public compare(arg0: javax.xml.datatype.XMLGregorianCalendar): int
    public normalize(): javax.xml.datatype.XMLGregorianCalendar
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toXMLFormat(): string
    public getXMLSchemaType(): javax.xml.namespace.QName
    public toString(): string
    public isValid(): boolean
    public add(arg0: javax.xml.datatype.Duration): void
    public toGregorianCalendar(): java.util.GregorianCalendar
    public toGregorianCalendar(arg0: java.util.TimeZone, arg1: java.util.Locale, arg2: javax.xml.datatype.XMLGregorianCalendar): java.util.GregorianCalendar
    public getTimeZone(arg0: int): java.util.TimeZone
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}