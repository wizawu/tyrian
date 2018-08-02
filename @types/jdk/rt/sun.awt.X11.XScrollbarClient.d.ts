declare namespace sun {
    namespace awt {
        namespace X11 {
            interface XScrollbarClient {
                notifyValue(arg0: sun.awt.X11.XScrollbar, arg1: int, arg2: int, arg3: boolean): void
                getEventSource(): java.awt.Component
                repaintScrollbarRequest(arg0: sun.awt.X11.XScrollbar): void
            }
        }
    }
}