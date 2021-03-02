declare namespace javax {
  namespace xml {
    namespace datatype {

      abstract class DatatypeFactory {
        public static readonly DATATYPEFACTORY_PROPERTY: java.lang.String
        public static readonly DATATYPEFACTORY_IMPLEMENTATION_CLASS: java.lang.String
        protected constructor()
        public static newDefaultInstance(): javax.xml.datatype.DatatypeFactory
        public static newInstance(): javax.xml.datatype.DatatypeFactory
        public static newInstance(arg0: java.lang.String, arg1: java.lang.ClassLoader): javax.xml.datatype.DatatypeFactory
        public abstract newDuration(arg0: java.lang.String): javax.xml.datatype.Duration
        public abstract newDuration(arg0: long): javax.xml.datatype.Duration
        public abstract newDuration(arg0: boolean, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger, arg5: java.math.BigInteger, arg6: java.math.BigDecimal): javax.xml.datatype.Duration
        public newDuration(arg0: boolean, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: java.lang.String): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: long): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: boolean, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger): javax.xml.datatype.Duration
        public newDurationDayTime(arg0: boolean, arg1: int, arg2: int, arg3: int, arg4: int): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: java.lang.String): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: long): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: boolean, arg1: java.math.BigInteger, arg2: java.math.BigInteger): javax.xml.datatype.Duration
        public newDurationYearMonth(arg0: boolean, arg1: int, arg2: int): javax.xml.datatype.Duration
        public abstract newXMLGregorianCalendar(): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(arg0: java.lang.String): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(arg0: java.util.GregorianCalendar): javax.xml.datatype.XMLGregorianCalendar
        public abstract newXMLGregorianCalendar(arg0: java.math.BigInteger, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.math.BigDecimal, arg7: int): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendar(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarDate(arg0: int, arg1: int, arg2: int, arg3: int): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(arg0: int, arg1: int, arg2: int, arg3: int): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(arg0: int, arg1: int, arg2: int, arg3: java.math.BigDecimal, arg4: int): javax.xml.datatype.XMLGregorianCalendar
        public newXMLGregorianCalendarTime(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): javax.xml.datatype.XMLGregorianCalendar
      }

    }
  }
}
