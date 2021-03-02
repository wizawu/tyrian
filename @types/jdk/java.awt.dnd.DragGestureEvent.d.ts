declare namespace java {
  namespace awt {
    namespace dnd {

      class DragGestureEvent extends java.util.EventObject {
        public constructor(arg0: java.awt.dnd.DragGestureRecognizer, arg1: int, arg2: java.awt.Point, arg3: java.util.List<java.awt.event.InputEvent>)
        public getSourceAsDragGestureRecognizer(): java.awt.dnd.DragGestureRecognizer
        public getComponent(): java.awt.Component
        public getDragSource(): java.awt.dnd.DragSource
        public getDragOrigin(): java.awt.Point
        public iterator(): java.util.Iterator<java.awt.event.InputEvent>
        public toArray(): java.lang.Object[]
        public toArray(arg0: java.lang.Object[]): java.lang.Object[]
        public getDragAction(): int
        public getTriggerEvent(): java.awt.event.InputEvent
        public startDrag(arg0: java.awt.Cursor, arg1: java.awt.datatransfer.Transferable): void
        public startDrag(arg0: java.awt.Cursor, arg1: java.awt.datatransfer.Transferable, arg2: java.awt.dnd.DragSourceListener): void
        public startDrag(arg0: java.awt.Cursor, arg1: java.awt.Image, arg2: java.awt.Point, arg3: java.awt.datatransfer.Transferable, arg4: java.awt.dnd.DragSourceListener): void
      }

    }
  }
}
