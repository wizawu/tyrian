declare namespace javax {
  namespace xml {
    namespace datatype {
      abstract class Duration {
        public constructor()
        public getXMLSchemaType(): javax.xml.namespace.QName
        public abstract getSign(): number
        public getYears(): number
        public getMonths(): number
        public getDays(): number
        public getHours(): number
        public getMinutes(): number
        public getSeconds(): number
        public getTimeInMillis(arg0: java.util.Calendar): number
        public getTimeInMillis(arg0: java.util.Date): number
        public abstract getField(arg0: javax.xml.datatype.DatatypeConstants$Field): java.lang.Number
        public abstract isSet(arg0: javax.xml.datatype.DatatypeConstants$Field): boolean
        public abstract add(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
        public abstract addTo(arg0: java.util.Calendar): void
        public addTo(arg0: java.util.Date): void
        public subtract(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
        public multiply(arg0: number | java.lang.Integer): javax.xml.datatype.Duration
        public abstract multiply(arg0: java.math.BigDecimal): javax.xml.datatype.Duration
        public abstract negate(): javax.xml.datatype.Duration
        public abstract normalizeWith(arg0: java.util.Calendar): javax.xml.datatype.Duration
        public abstract compare(arg0: javax.xml.datatype.Duration): number
        public isLongerThan(arg0: javax.xml.datatype.Duration): boolean
        public isShorterThan(arg0: javax.xml.datatype.Duration): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public abstract hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
