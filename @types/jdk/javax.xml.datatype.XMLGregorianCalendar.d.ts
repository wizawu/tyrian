declare namespace javax {
  namespace xml {
    namespace datatype {
      abstract class XMLGregorianCalendar implements java.lang.Cloneable {
        public constructor()
        public abstract clear(): void
        public abstract reset(): void
        public abstract setYear(arg0: java.math.BigInteger): void
        public abstract setYear(arg0: number | java.lang.Integer): void
        public abstract setMonth(arg0: number | java.lang.Integer): void
        public abstract setDay(arg0: number | java.lang.Integer): void
        public abstract setTimezone(arg0: number | java.lang.Integer): void
        public setTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public abstract setHour(arg0: number | java.lang.Integer): void
        public abstract setMinute(arg0: number | java.lang.Integer): void
        public abstract setSecond(arg0: number | java.lang.Integer): void
        public abstract setMillisecond(arg0: number | java.lang.Integer): void
        public abstract setFractionalSecond(arg0: java.math.BigDecimal): void
        public setTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.math.BigDecimal
        ): void
        public setTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): void
        public abstract getEon(): java.math.BigInteger
        public abstract getYear(): number
        public abstract getEonAndYear(): java.math.BigInteger
        public abstract getMonth(): number
        public abstract getDay(): number
        public abstract getTimezone(): number
        public abstract getHour(): number
        public abstract getMinute(): number
        public abstract getSecond(): number
        public getMillisecond(): number
        public abstract getFractionalSecond(): java.math.BigDecimal
        public abstract compare(arg0: javax.xml.datatype.XMLGregorianCalendar): number
        public abstract normalize(): javax.xml.datatype.XMLGregorianCalendar
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public abstract toXMLFormat(): java.lang.String
        public abstract getXMLSchemaType(): javax.xml.namespace.QName
        public toString(): java.lang.String
        public abstract isValid(): boolean
        public abstract add(arg0: javax.xml.datatype.Duration): void
        public abstract toGregorianCalendar(): java.util.GregorianCalendar
        public abstract toGregorianCalendar(
          arg0: java.util.TimeZone,
          arg1: java.util.Locale,
          arg2: javax.xml.datatype.XMLGregorianCalendar
        ): java.util.GregorianCalendar
        public abstract getTimeZone(arg0: number | java.lang.Integer): java.util.TimeZone
        public abstract clone(): java.lang.Object
      }
    }
  }
}
