declare namespace java {
  namespace awt {
    namespace dnd {

      class DragSourceEvent extends java.util.EventObject {
        public constructor(arg0: java.awt.dnd.DragSourceContext)
        public constructor(arg0: java.awt.dnd.DragSourceContext, arg1: int, arg2: int)
        public getDragSourceContext(): java.awt.dnd.DragSourceContext
        public getLocation(): java.awt.Point
        public getX(): int
        public getY(): int
      }

    }
  }
}
