declare namespace java {
  namespace awt {
    namespace dnd {

      class DropTargetEvent extends java.util.EventObject {
        protected context: java.awt.dnd.DropTargetContext
        public constructor(arg0: java.awt.dnd.DropTargetContext)
        public getDropTargetContext(): java.awt.dnd.DropTargetContext
      }

    }
  }
}
