declare namespace java {
  namespace awt {
    namespace dnd {

      interface DropTargetListener extends java.util.EventListener {

        dragEnter(arg0: java.awt.dnd.DropTargetDragEvent): void
        dragOver(arg0: java.awt.dnd.DropTargetDragEvent): void
        dropActionChanged(arg0: java.awt.dnd.DropTargetDragEvent): void
        dragExit(arg0: java.awt.dnd.DropTargetEvent): void
        drop(arg0: java.awt.dnd.DropTargetDropEvent): void
      }

    }
  }
}
