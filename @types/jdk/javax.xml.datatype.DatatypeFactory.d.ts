declare namespace javax {
  namespace xml {
    namespace datatype {
      abstract class DatatypeFactory {
        public static readonly DATATYPEFACTORY_PROPERTY: java.lang.String
        public static readonly DATATYPEFACTORY_IMPLEMENTATION_CLASS: java.lang.String
        protected constructor()
        public static newDefaultInstance(): javax.xml.datatype.DatatypeFactory
        public static newInstance(): javax.xml.datatype.DatatypeFactory
        public static newInstance(
          arg0: java.lang.String | string,
          arg1: java.lang.ClassLoader
        ): javax.xml.datatype.DatatypeFactory
        public abstract newDuration(arg0: java.lang.String | string): javax.xml.datatype.Duration
        public abstract newDuration(arg0: number | java.lang.Long): javax.xml.datatype.Duration
        public abstract newDuration(
          arg0: boolean | java.lang.Boolean,
          arg1: java.math.BigInteger,
          arg2: java.math.BigInteger,
          arg3: java.math.BigInteger,
          arg4: java.math.BigInteger,
          arg5: java.math.BigInteger,
          arg6: java.math.BigDecimal
        ): javax.xml.datatype.Duration
        public newDuration(
          arg0: boolean | java.lang.Boolean,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer
        ): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: java.lang.String | string): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: number | java.lang.Long): javax.xml.datatype.Duration
        public newDurationDayTime(
          arg0: boolean | java.lang.Boolean,
          arg1: java.math.BigInteger,
          arg2: java.math.BigInteger,
          arg3: java.math.BigInteger,
          arg4: java.math.BigInteger
        ): javax.xml.datatype.Duration
        public newDurationDayTime(
          arg0: boolean | java.lang.Boolean,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: java.lang.String | string): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: number | java.lang.Long): javax.xml.datatype.Duration
        public newDurationYearMonth(
          arg0: boolean | java.lang.Boolean,
          arg1: java.math.BigInteger,
          arg2: java.math.BigInteger
        ): javax.xml.datatype.Duration
        public newDurationYearMonth(
          arg0: boolean | java.lang.Boolean,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): javax.xml.datatype.Duration
        public abstract newXMLGregorianCalendar(): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(
          arg0: java.lang.String | string
        ): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(
          arg0: java.util.GregorianCalendar
        ): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(
          arg0: java.math.BigInteger,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: java.math.BigDecimal,
          arg7: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendar(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarDate(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: java.math.BigDecimal,
          arg4: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): javax.xml.datatype.XMLGregorianCalendar
      }
    }
  }
}
