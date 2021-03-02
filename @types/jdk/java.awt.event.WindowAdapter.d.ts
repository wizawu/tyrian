declare namespace java {
  namespace awt {
    namespace event {

      abstract class WindowAdapter implements java.awt.event.WindowListener, java.awt.event.WindowStateListener, java.awt.event.WindowFocusListener {
        public constructor()
        public windowOpened(arg0: java.awt.event.WindowEvent): void
        public windowClosing(arg0: java.awt.event.WindowEvent): void
        public windowClosed(arg0: java.awt.event.WindowEvent): void
        public windowIconified(arg0: java.awt.event.WindowEvent): void
        public windowDeiconified(arg0: java.awt.event.WindowEvent): void
        public windowActivated(arg0: java.awt.event.WindowEvent): void
        public windowDeactivated(arg0: java.awt.event.WindowEvent): void
        public windowStateChanged(arg0: java.awt.event.WindowEvent): void
        public windowGainedFocus(arg0: java.awt.event.WindowEvent): void
        public windowLostFocus(arg0: java.awt.event.WindowEvent): void
      }

    }
  }
}
