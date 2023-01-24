declare namespace javax {
  namespace swing {
    namespace event {
      abstract class InternalFrameAdapter implements javax.swing.event.InternalFrameListener {
        public constructor()
        public internalFrameOpened(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameClosing(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameClosed(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameIconified(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameDeiconified(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameActivated(arg0: javax.swing.event.InternalFrameEvent): void
        public internalFrameDeactivated(arg0: javax.swing.event.InternalFrameEvent): void
      }
    }
  }
}
