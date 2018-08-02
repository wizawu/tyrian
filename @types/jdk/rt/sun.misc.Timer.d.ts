declare namespace sun {
    namespace misc {
class Timer {
    public owner: sun.misc.Timeable
    public constructor(arg0: sun.misc.Timeable | sun.misc.Timeable$$Lambda, arg1: long)
    public isStopped(): boolean
    public stop(): void
    public cont(): void
    public reset(): void
    public getStopTime(): long
    public getInterval(): long
    public setInterval(arg0: long): void
    public getRemainingTime(): long
    public setRemainingTime(arg0: long): void
    public setRegular(arg0: boolean): void
    protected getTimerThread(): java.lang.Thread
    public static class: java.lang.Class<any>
}

    }
}