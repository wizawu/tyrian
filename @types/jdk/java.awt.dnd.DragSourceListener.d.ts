declare namespace java {
  namespace awt {
    namespace dnd {
      interface DragSourceListener extends java.util.EventListener {
        dragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
        dragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
        dropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
        dragExit(arg0: java.awt.dnd.DragSourceEvent): void
        dragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
      }
    }
  }
}
