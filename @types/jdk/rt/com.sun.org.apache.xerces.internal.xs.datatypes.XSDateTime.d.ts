declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            namespace datatypes {
interface XSDateTime {
    getYears(): int
    getMonths(): int
    getDays(): int
    getHours(): int
    getMinutes(): int
    getSeconds(): double
    hasTimeZone(): boolean
    getTimeZoneHours(): int
    getTimeZoneMinutes(): int
    getLexicalValue(): string
    normalize(): com.sun.org.apache.xerces.internal.xs.datatypes.XSDateTime
    isNormalized(): boolean
    getXMLGregorianCalendar(): javax.xml.datatype.XMLGregorianCalendar
    getDuration(): javax.xml.datatype.Duration
}

                            }
                        }
                    }
                }
            }
        }
    }
}