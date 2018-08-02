declare namespace java {
    namespace awt {
class KeyboardFocusManager$1 implements sun.awt.AWTAccessor$KeyboardFocusManagerAccessor {
    public shouldNativelyFocusHeavyweight(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: sun.awt.CausedFocusEvent$Cause): int
    public processSynchronousLightweightTransfer(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long): boolean
    public removeLastFocusRequest(arg0: java.awt.Component): void
    public setMostRecentFocusOwner(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: java.awt.Component): void
    public getCurrentKeyboardFocusManager(arg0: sun.awt.AppContext): java.awt.KeyboardFocusManager
    public getCurrentFocusCycleRoot(): java.awt.Container
    public static class: java.lang.Class<any>
}

    }
}