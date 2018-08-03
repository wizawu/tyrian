declare namespace sun {
    namespace awt {
        interface AWTAccessor$WindowAccessor {
            getOpacity(arg0: java.awt.Window): float
            setOpacity(arg0: java.awt.Window, arg1: float): void
            getShape(arg0: java.awt.Window): java.awt.Shape
            setShape(arg0: java.awt.Window, arg1: java.awt.Shape): void
            setOpaque(arg0: java.awt.Window, arg1: boolean): void
            updateWindow(arg0: java.awt.Window): void
            getSecurityWarningSize(arg0: java.awt.Window): java.awt.Dimension
            setSecurityWarningSize(arg0: java.awt.Window, arg1: int, arg2: int): void
            setSecurityWarningPosition(arg0: java.awt.Window, arg1: java.awt.geom.Point2D, arg2: float, arg3: float): void
            calculateSecurityWarningPosition(arg0: java.awt.Window, arg1: double, arg2: double, arg3: double, arg4: double): java.awt.geom.Point2D
            setLWRequestStatus(arg0: java.awt.Window, arg1: boolean): void
            isAutoRequestFocus(arg0: java.awt.Window): boolean
            isTrayIconWindow(arg0: java.awt.Window): boolean
            setTrayIconWindow(arg0: java.awt.Window, arg1: boolean): void
            getOwnedWindows(arg0: java.awt.Window): java.awt.Window[]
        }
    }
}