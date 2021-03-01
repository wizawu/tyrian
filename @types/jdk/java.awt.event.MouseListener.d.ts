declare namespace java {
  namespace awt {
    namespace event {

      interface MouseListener extends java.util.EventListener {

        mouseClicked(arg0: java.awt.event.MouseEvent): void
        mousePressed(arg0: java.awt.event.MouseEvent): void
        mouseReleased(arg0: java.awt.event.MouseEvent): void
        mouseEntered(arg0: java.awt.event.MouseEvent): void
        mouseExited(arg0: java.awt.event.MouseEvent): void
      }

    }
  }
}
