declare namespace sun {
    namespace util {
        namespace calendar {
class LocalGregorianCalendar extends sun.util.calendar.BaseCalendar {
    public getName(): string
    public getCalendarDate(): sun.util.calendar.LocalGregorianCalendar$Date
    public getCalendarDate(arg0: long): sun.util.calendar.LocalGregorianCalendar$Date
    public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.LocalGregorianCalendar$Date
    public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.LocalGregorianCalendar$Date
    public newCalendarDate(): sun.util.calendar.LocalGregorianCalendar$Date
    public newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.LocalGregorianCalendar$Date
    public validate(arg0: sun.util.calendar.CalendarDate): boolean
    public normalize(arg0: sun.util.calendar.CalendarDate): boolean
    public isLeapYear(arg0: int): boolean
    public isLeapYear(arg0: sun.util.calendar.Era, arg1: int): boolean
    public getCalendarDateFromFixedDate(arg0: sun.util.calendar.CalendarDate, arg1: long): void
    public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
    public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.CalendarDate
    public getCalendarDate(arg0: long): sun.util.calendar.CalendarDate
    public getCalendarDate(): sun.util.calendar.CalendarDate
    public newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.CalendarDate
    public newCalendarDate(): sun.util.calendar.CalendarDate
    public static class: java.lang.Class<any>
}

        }
    }
}