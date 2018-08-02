declare namespace sun {
    namespace awt {
        interface AWTAccessor$KeyboardFocusManagerAccessor {
            shouldNativelyFocusHeavyweight(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: sun.awt.CausedFocusEvent$Cause): int
            processSynchronousLightweightTransfer(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long): boolean
            removeLastFocusRequest(arg0: java.awt.Component): void
            setMostRecentFocusOwner(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: java.awt.Component): void
            getCurrentKeyboardFocusManager(arg0: sun.awt.AppContext): java.awt.KeyboardFocusManager
            getCurrentFocusCycleRoot(): java.awt.Container
        }
    }
}