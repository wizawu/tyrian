declare namespace javax {
  namespace xml {
    namespace datatype {

      abstract class XMLGregorianCalendar implements java.lang.Cloneable {

        public constructor()
        public abstract clear(): void
        public abstract reset(): void
        public abstract setYear(arg0: java.math.BigInteger): void
        public abstract setYear(arg0: int): void
        public abstract setMonth(arg0: int): void
        public abstract setDay(arg0: int): void
        public abstract setTimezone(arg0: int): void
        public setTime(arg0: int, arg1: int, arg2: int): void
        public abstract setHour(arg0: int): void
        public abstract setMinute(arg0: int): void
        public abstract setSecond(arg0: int): void
        public abstract setMillisecond(arg0: int): void
        public abstract setFractionalSecond(arg0: java.math.BigDecimal): void
        public setTime(arg0: int, arg1: int, arg2: int, arg3: java.math.BigDecimal): void
        public setTime(arg0: int, arg1: int, arg2: int, arg3: int): void
        public abstract getEon(): java.math.BigInteger
        public abstract getYear(): int
        public abstract getEonAndYear(): java.math.BigInteger
        public abstract getMonth(): int
        public abstract getDay(): int
        public abstract getTimezone(): int
        public abstract getHour(): int
        public abstract getMinute(): int
        public abstract getSecond(): int
        public getMillisecond(): int
        public abstract getFractionalSecond(): java.math.BigDecimal
        public abstract compare(arg0: javax.xml.datatype.XMLGregorianCalendar): int
        public abstract normalize(): javax.xml.datatype.XMLGregorianCalendar
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public abstract toXMLFormat(): java.lang.String
        public abstract getXMLSchemaType(): javax.xml.namespace.QName
        public toString(): java.lang.String
        public abstract isValid(): boolean
        public abstract add(arg0: javax.xml.datatype.Duration): void
        public abstract toGregorianCalendar(): java.util.GregorianCalendar
        public abstract toGregorianCalendar(arg0: java.util.TimeZone, arg1: java.util.Locale, arg2: javax.xml.datatype.XMLGregorianCalendar): java.util.GregorianCalendar
        public abstract getTimeZone(arg0: int): java.util.TimeZone
        public abstract clone(): java.lang.Object
      }

    }
  }
}
