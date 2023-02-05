declare namespace java {
  namespace awt {
    namespace dnd {
      abstract class MouseDragGestureRecognizer
        extends java.awt.dnd.DragGestureRecognizer
        implements java.awt.event.MouseListener, java.awt.event.MouseMotionListener
      {
        protected constructor(
          arg0: java.awt.dnd.DragSource,
          arg1: java.awt.Component,
          arg2: number | java.lang.Integer,
          arg3: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$lambda
        )
        protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: number | java.lang.Integer)
        protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component)
        protected constructor(arg0: java.awt.dnd.DragSource)
        protected registerListeners(): void
        protected unregisterListeners(): void
        public mouseClicked(arg0: java.awt.event.MouseEvent): void
        public mousePressed(arg0: java.awt.event.MouseEvent): void
        public mouseReleased(arg0: java.awt.event.MouseEvent): void
        public mouseEntered(arg0: java.awt.event.MouseEvent): void
        public mouseExited(arg0: java.awt.event.MouseEvent): void
        public mouseDragged(arg0: java.awt.event.MouseEvent): void
        public mouseMoved(arg0: java.awt.event.MouseEvent): void
      }
    }
  }
}
