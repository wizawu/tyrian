declare namespace java {
  namespace awt {
    namespace dnd {
      class DragSourceContext
        implements java.awt.dnd.DragSourceListener, java.awt.dnd.DragSourceMotionListener, java.io.Serializable
      {
        protected static readonly DEFAULT: int
        protected static readonly ENTER: int
        protected static readonly OVER: int
        protected static readonly CHANGED: int
        public constructor(
          arg0: java.awt.dnd.DragGestureEvent,
          arg1: java.awt.Cursor,
          arg2: java.awt.Image,
          arg3: java.awt.Point,
          arg4: java.awt.datatransfer.Transferable,
          arg5: java.awt.dnd.DragSourceListener
        )
        public getDragSource(): java.awt.dnd.DragSource
        public getComponent(): java.awt.Component
        public getTrigger(): java.awt.dnd.DragGestureEvent
        public getSourceActions(): number
        public setCursor(arg0: java.awt.Cursor): void
        public getCursor(): java.awt.Cursor
        public addDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
        public removeDragSourceListener(arg0: java.awt.dnd.DragSourceListener): void
        public transferablesFlavorsChanged(): void
        public dragEnter(arg0: java.awt.dnd.DragSourceDragEvent): void
        public dragOver(arg0: java.awt.dnd.DragSourceDragEvent): void
        public dragExit(arg0: java.awt.dnd.DragSourceEvent): void
        public dropActionChanged(arg0: java.awt.dnd.DragSourceDragEvent): void
        public dragDropEnd(arg0: java.awt.dnd.DragSourceDropEvent): void
        public dragMouseMoved(arg0: java.awt.dnd.DragSourceDragEvent): void
        public getTransferable(): java.awt.datatransfer.Transferable
        protected updateCurrentCursor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
      }
    }
  }
}
