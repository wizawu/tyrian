declare namespace java {
  namespace awt {
    namespace dnd {

      abstract class DropTargetAdapter implements java.awt.dnd.DropTargetListener {
        public constructor()
        public dragEnter(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dragOver(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dropActionChanged(arg0: java.awt.dnd.DropTargetDragEvent): void
        public dragExit(arg0: java.awt.dnd.DropTargetEvent): void
      }

    }
  }
}
