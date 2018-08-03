declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
                                    abstract class AbstractDateTimeDV extends com.sun.org.apache.xerces.internal.impl.dv.xs.TypeValidator {
                                        protected static readonly YEAR: int
                                        protected static readonly MONTH: int
                                        protected static readonly DAY: int
                                        protected static readonly datatypeFactory: javax.xml.datatype.DatatypeFactory
                                        public constructor()
                                        public getAllowedFacets(): short
                                        public isIdentical(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                                        public compare(arg0: java.lang.Object, arg1: java.lang.Object): int
                                        protected compareDates(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg1: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg2: boolean): short
                                        protected compareOrder(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg1: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): short
                                        protected getTime(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected getDate(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): int
                                        protected getYearMonth(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): int
                                        protected parseTimeZone(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected getTimeZone(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg2: int, arg3: int): void
                                        protected indexOf(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: char): int
                                        protected validateDateTime(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected findUTCSign(arg0: java.lang.String | string, arg1: int, arg2: int): int
                                        protected isNextCharUTCSign(arg0: java.lang.String | string, arg1: int, arg2: int): boolean
                                        protected parseInt(arg0: java.lang.String | string, arg1: int, arg2: int): int
                                        protected parseIntYear(arg0: java.lang.String | string, arg1: int): int
                                        protected normalize(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected saveUnnormalized(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected resetDateObj(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): void
                                        protected maxDayInMonthFor(arg0: int, arg1: int): int
                                        protected mod(arg0: int, arg1: int, arg2: int): int
                                        protected fQuotient(arg0: int, arg1: int): int
                                        protected modulo(arg0: int, arg1: int, arg2: int): int
                                        protected fQuotient(arg0: int, arg1: int, arg2: int): int
                                        protected dateToString(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): string
                                        protected append(arg0: java.lang.StringBuffer, arg1: int, arg2: int): void
                                        protected append(arg0: java.lang.StringBuffer, arg1: double): void
                                        protected append2(arg0: java.lang.StringBuffer, arg1: double): void
                                        protected parseSecond(arg0: java.lang.String | string, arg1: int, arg2: int): double
                                        protected getXMLGregorianCalendar(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): javax.xml.datatype.XMLGregorianCalendar
                                        protected getDuration(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): javax.xml.datatype.Duration
                                        protected getFractionalSecondsAsBigDecimal(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): java.math.BigDecimal
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
}