declare namespace sun {
    namespace awt {
        interface AWTAccessor$ComponentAccessor {
            setBackgroundEraseDisabled(arg0: java.awt.Component, arg1: boolean): void
            getBackgroundEraseDisabled(arg0: java.awt.Component): boolean
            getBounds(arg0: java.awt.Component): java.awt.Rectangle
            setMixingCutoutShape(arg0: java.awt.Component, arg1: java.awt.Shape): void
            setGraphicsConfiguration(arg0: java.awt.Component, arg1: java.awt.GraphicsConfiguration): void
            requestFocus(arg0: java.awt.Component, arg1: sun.awt.CausedFocusEvent$Cause): boolean
            canBeFocusOwner(arg0: java.awt.Component): boolean
            isVisible(arg0: java.awt.Component): boolean
            setRequestFocusController(arg0: sun.awt.RequestFocusController | sun.awt.RequestFocusController$$Lambda): void
            getAppContext(arg0: java.awt.Component): sun.awt.AppContext
            setAppContext(arg0: java.awt.Component, arg1: sun.awt.AppContext): void
            getParent(arg0: java.awt.Component): java.awt.Container
            setParent(arg0: java.awt.Component, arg1: java.awt.Container): void
            setSize(arg0: java.awt.Component, arg1: int, arg2: int): void
            getLocation(arg0: java.awt.Component): java.awt.Point
            setLocation(arg0: java.awt.Component, arg1: int, arg2: int): void
            isEnabled(arg0: java.awt.Component): boolean
            isDisplayable(arg0: java.awt.Component): boolean
            getCursor(arg0: java.awt.Component): java.awt.Cursor
            getPeer(arg0: java.awt.Component): java.awt.peer.ComponentPeer
            setPeer(arg0: java.awt.Component, arg1: java.awt.peer.ComponentPeer): void
            isLightweight(arg0: java.awt.Component): boolean
            getIgnoreRepaint(arg0: java.awt.Component): boolean
            getWidth(arg0: java.awt.Component): int
            getHeight(arg0: java.awt.Component): int
            getX(arg0: java.awt.Component): int
            getY(arg0: java.awt.Component): int
            getForeground(arg0: java.awt.Component): java.awt.Color
            getBackground(arg0: java.awt.Component): java.awt.Color
            setBackground(arg0: java.awt.Component, arg1: java.awt.Color): void
            getFont(arg0: java.awt.Component): java.awt.Font
            processEvent(arg0: java.awt.Component, arg1: java.awt.AWTEvent): void
            getAccessControlContext(arg0: java.awt.Component): java.security.AccessControlContext
            revalidateSynchronously(arg0: java.awt.Component): void
        }
    }
}