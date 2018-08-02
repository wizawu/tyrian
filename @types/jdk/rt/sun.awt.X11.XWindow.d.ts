declare namespace sun {
    namespace awt {
        namespace X11 {
class XWindow extends sun.awt.X11.XBaseWindow implements sun.awt.X11ComponentPeer {
    protected mwm_hints: sun.awt.X11.PropMwmHints
    protected static wm_protocols: sun.awt.X11.XAtom
    protected static wm_delete_window: sun.awt.X11.XAtom
    protected static wm_take_focus: sun.awt.X11.XAtom
    protected graphicsConfig: sun.awt.X11GraphicsConfig
    protected graphicsConfigData: sun.awt.X11.AwtGraphicsConfigData
    public static TARGET: string
    public static REPARENTED: string
    protected initGraphicsConfiguration(): void
    public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
    public getGraphicsConfigurationData(): sun.awt.X11.AwtGraphicsConfigData
    protected getWMClass(): java.lang.String[]
    public getTarget(): java.lang.Object
    public getEventSource(): java.awt.Component
    public getColorModel(arg0: int): java.awt.image.ColorModel
    public getColorModel(): java.awt.image.ColorModel
    public getGraphics(): java.awt.Graphics
    public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
    public getTargetBounds(): java.awt.Rectangle
    public postEventToEventQueue(arg0: java.awt.AWTEvent): void
    protected doEraseBackground(): boolean
    public xSetBackground(arg0: java.awt.Color): void
    public setBackground(arg0: java.awt.Color): void
    public getWinBackground(): java.awt.Color
    public isEmbedded(): boolean
    public repaint(arg0: int, arg1: int, arg2: int, arg3: int): void
    public paint(arg0: java.awt.Graphics): void
    protected flush(): void
    public popup(arg0: int, arg1: int, arg2: int, arg3: int): void
    public handleExposeEvent(arg0: sun.awt.X11.XEvent): void
    public postPaintEvent(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: int): void
    public handleButtonPressRelease(arg0: sun.awt.X11.XEvent): void
    public handleMotionNotify(arg0: sun.awt.X11.XEvent): void
    public isMouseAbove(): boolean
    protected setMouseAbove(arg0: boolean): void
    protected enterNotify(arg0: long): void
    protected leaveNotify(arg0: long): void
    public handleXCrossingEvent(arg0: sun.awt.X11.XEvent): void
    public doLayout(arg0: int, arg1: int, arg2: int, arg3: int): void
    public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
    public handleMapNotifyEvent(arg0: sun.awt.X11.XEvent): void
    public handleUnmapNotifyEvent(arg0: sun.awt.X11.XEvent): void
    public handleKeyPress(arg0: sun.awt.X11.XEvent): void
    public handleKeyRelease(arg0: sun.awt.X11.XEvent): void
    protected stateChanged(arg0: long, arg1: int, arg2: int): void
    public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
    public reshape(arg0: java.awt.Rectangle): void
    public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
    public layout(): void
    public getSurfaceData(): sun.java2d.SurfaceData
    public dispose(): void
    public getLocationOnScreen(): java.awt.Point
    public postKeyEvent(arg0: int, arg1: long, arg2: int, arg3: int, arg4: int, arg5: int, arg6: long, arg7: int, arg8: long, arg9: int, arg10: int): void
    public getMWMHints(): sun.awt.X11.PropMwmHints
    public setMWMHints(arg0: sun.awt.X11.PropMwmHints): void
    protected initWMProtocols(): void
    protected getWMProtocols(): sun.awt.X11.XAtomList
    public setFullScreenExclusiveModeState(arg0: boolean): void
    public isFullScreenExclusiveMode(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}