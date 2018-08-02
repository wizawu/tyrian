declare namespace sun {
    namespace awt {
        namespace X11 {
class XWindowPeer extends sun.awt.X11.XPanelPeer implements java.awt.peer.WindowPeer , sun.awt.DisplayChangedListener {
    protected prevTransientFor: sun.awt.X11.XWindowPeer
    protected nextTransientFor: sun.awt.X11.XWindowPeer
    protected toplevelStateListeners: java.util.Vector<sun.awt.X11.ToplevelStateListener>
    public getWindowType(): java.awt.Window$Type
    protected getWMName(): string
    public updateIconImages(): void
    public recursivelySetIcon(arg0: java.util.List<sun.awt.IconInfo>): void
    protected static getDefaultIconInfo(): java.util.List<sun.awt.IconInfo>
    public updateMinimumSize(): void
    public getTargetMinimumSize(): java.awt.Dimension
    public getOwnerPeer(): sun.awt.X11.XWindowPeer
    public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
    public getInsets(): java.awt.Insets
    public handleIconify(): void
    public handleDeiconify(): void
    public handleStateChange(arg0: int, arg1: int): void
    public insets(): java.awt.Insets
    public handleWindowFocusIn_Dispatch(): void
    public handleWindowFocusInSync(arg0: long): void
    public handleWindowFocusIn(arg0: long): void
    public handleWindowFocusOut(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: long): void
    public handleWindowFocusOutSync(arg0: java.awt.Window | java.awt.Window$$Lambda, arg1: long): void
    public checkIfOnNewScreen(arg0: java.awt.Rectangle): void
    public displayChanged(): void
    public paletteChanged(): void
    protected getNewLocation(arg0: sun.awt.X11.XConfigureEvent, arg1: int, arg2: int): java.awt.Point
    public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
    protected requestXFocus(arg0: long, arg1: boolean): void
    public focusAllowedFor(): boolean
    public handleFocusEvent(arg0: sun.awt.X11.XEvent): void
    public toFront(): void
    public toBack(): void
    public updateAlwaysOnTopState(): void
    public setVisible(arg0: boolean): void
    protected suppressWmTakeFocus(arg0: boolean): void
    public repositionSecurityWarning(): void
    protected setMouseAbove(arg0: boolean): void
    public setFullScreenExclusiveModeState(arg0: boolean): void
    public updateSecurityWarningVisibility(): void
    public dispose(): void
    public handleVisibilityEvent(arg0: sun.awt.X11.XEvent): void
    public handleMapNotifyEvent(arg0: sun.awt.X11.XEvent): void
    public handleUnmapNotifyEvent(arg0: sun.awt.X11.XEvent): void
    protected isWMStateNetHidden(): boolean
    protected requestInitialFocus(): void
    public addToplevelStateListener(arg0: sun.awt.X11.ToplevelStateListener): void
    public removeToplevelStateListener(arg0: sun.awt.X11.ToplevelStateListener): void
    protected stateChanged(arg0: long, arg1: int, arg2: int): void
    public setModalBlocked(arg0: java.awt.Dialog, arg1: boolean): void
    public setModalBlocked(arg0: java.awt.Dialog, arg1: boolean, arg2: java.util.Vector<sun.awt.X11.XWindowPeer>): void
    public requestWindowFocus(arg0: sun.awt.X11.XWindowPeer): boolean
    public requestWindowFocus(): boolean
    public requestWindowFocus(arg0: long, arg1: boolean): boolean
    public xSetVisible(arg0: boolean): void
    public addDropTarget(): void
    public removeDropTarget(): void
    public updateFocusableWindowState(): void
    public getNETWMState(): sun.awt.X11.XAtomList
    public setNETWMState(arg0: sun.awt.X11.XAtomList): void
    public getMWMHints(): sun.awt.X11.PropMwmHints
    public setMWMHints(arg0: sun.awt.X11.PropMwmHints): void
    protected updateDropTarget(): void
    public setGrab(arg0: boolean): void
    public isGrabbed(): boolean
    public handleXCrossingEvent(arg0: sun.awt.X11.XEvent): void
    public handleMotionNotify(arg0: sun.awt.X11.XEvent): void
    public handleButtonPressRelease(arg0: sun.awt.X11.XEvent): void
    public print(arg0: java.awt.Graphics): void
    public setOpacity(arg0: float): void
    public setOpaque(arg0: boolean): void
    public updateWindow(): void
    public static class: java.lang.Class<any>
}

        }
    }
}