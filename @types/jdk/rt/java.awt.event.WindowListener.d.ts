declare namespace java {
    namespace awt {
        namespace event {
interface WindowListener extends java.util.EventListener {
    windowOpened(arg0: java.awt.event.WindowEvent): void
    windowClosing(arg0: java.awt.event.WindowEvent): void
    windowClosed(arg0: java.awt.event.WindowEvent): void
    windowIconified(arg0: java.awt.event.WindowEvent): void
    windowDeiconified(arg0: java.awt.event.WindowEvent): void
    windowActivated(arg0: java.awt.event.WindowEvent): void
    windowDeactivated(arg0: java.awt.event.WindowEvent): void
}

        }
    }
}