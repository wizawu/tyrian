declare namespace java {
  namespace awt {
    namespace event {

      abstract class ComponentAdapter implements java.awt.event.ComponentListener {
        public constructor()
        public componentResized(arg0: java.awt.event.ComponentEvent): void
        public componentMoved(arg0: java.awt.event.ComponentEvent): void
        public componentShown(arg0: java.awt.event.ComponentEvent): void
        public componentHidden(arg0: java.awt.event.ComponentEvent): void
      }

    }
  }
}
