declare namespace java {
    namespace awt {
        namespace event {
            interface WindowFocusListener extends java.util.EventListener {
                windowGainedFocus(arg0: java.awt.event.WindowEvent): void
                windowLostFocus(arg0: java.awt.event.WindowEvent): void
            }
        }
    }
}