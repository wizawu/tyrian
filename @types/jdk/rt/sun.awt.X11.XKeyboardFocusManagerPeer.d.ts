declare namespace sun {
    namespace awt {
        namespace X11 {
class XKeyboardFocusManagerPeer extends sun.awt.KeyboardFocusManagerPeerImpl {
    public static getInstance(): sun.awt.X11.XKeyboardFocusManagerPeer
    public setCurrentFocusOwner(arg0: java.awt.Component): void
    public getCurrentFocusOwner(): java.awt.Component
    public setCurrentFocusedWindow(arg0: java.awt.Window | java.awt.Window$$Lambda): void
    public getCurrentFocusedWindow(): java.awt.Window
    public static deliverFocus(arg0: java.awt.Component, arg1: java.awt.Component, arg2: boolean, arg3: boolean, arg4: long, arg5: sun.awt.CausedFocusEvent$Cause): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}