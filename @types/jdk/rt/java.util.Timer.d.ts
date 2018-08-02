declare namespace java {
    namespace util {
class Timer {
    public constructor()
    public constructor(arg0: boolean)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public schedule(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: long): void
    public schedule(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: java.util.Date): void
    public schedule(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: long, arg2: long): void
    public schedule(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: java.util.Date, arg2: long): void
    public scheduleAtFixedRate(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: long, arg2: long): void
    public scheduleAtFixedRate(arg0: java.util.TimerTask | java.util.TimerTask$$Lambda, arg1: java.util.Date, arg2: long): void
    public cancel(): void
    public purge(): int
    public static class: java.lang.Class<any>
}

    }
}