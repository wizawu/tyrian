declare namespace sun {
    namespace awt {
class CausedFocusEvent extends java.awt.event.FocusEvent {
    public getCause(): sun.awt.CausedFocusEvent$Cause
    public toString(): string
    public constructor(arg0: java.awt.Component, arg1: int, arg2: boolean, arg3: java.awt.Component, arg4: sun.awt.CausedFocusEvent$Cause)
    public static retarget(arg0: java.awt.event.FocusEvent, arg1: java.awt.Component): java.awt.event.FocusEvent
    public static class: java.lang.Class<any>
}

    }
}