declare namespace java {
  namespace awt {
    namespace dnd {
      class DragSourceEvent extends java.util.EventObject {
        public constructor(arg0: java.awt.dnd.DragSourceContext)
        public constructor(
          arg0: java.awt.dnd.DragSourceContext,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public getDragSourceContext(): java.awt.dnd.DragSourceContext
        public getLocation(): java.awt.Point
        public getX(): number
        public getY(): number
      }
    }
  }
}
