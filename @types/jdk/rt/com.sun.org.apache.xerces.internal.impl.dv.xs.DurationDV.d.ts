declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
                                    class DurationDV extends com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV {
                                        public static DURATION_TYPE: int
                                        public static YEARMONTHDURATION_TYPE: int
                                        public static DAYTIMEDURATION_TYPE: int
                                        public constructor()
                                        public getActualValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): java.lang.Object
                                        protected parse(arg0: java.lang.String | string, arg1: int): com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData
                                        protected compareDates(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg1: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData, arg2: boolean): short
                                        protected parseSecond(arg0: java.lang.String | string, arg1: int, arg2: int): double
                                        protected dateToString(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): string
                                        protected getDuration(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.AbstractDateTimeDV$DateTimeData): javax.xml.datatype.Duration
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