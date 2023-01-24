declare namespace java {
  namespace awt {
    namespace dnd {
      abstract class DragGestureRecognizer implements java.io.Serializable {
        protected dragSource: java.awt.dnd.DragSource
        protected component: java.awt.Component
        protected dragGestureListener: java.awt.dnd.DragGestureListener
        protected sourceActions: int
        protected events: java.util.ArrayList<java.awt.event.InputEvent>
        protected constructor(
          arg0: java.awt.dnd.DragSource,
          arg1: java.awt.Component,
          arg2: number | java.lang.Integer,
          arg3: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$lambda
        )
        protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component, arg2: number | java.lang.Integer)
        protected constructor(arg0: java.awt.dnd.DragSource, arg1: java.awt.Component)
        protected constructor(arg0: java.awt.dnd.DragSource)
        protected abstract registerListeners(): void
        protected abstract unregisterListeners(): void
        public getDragSource(): java.awt.dnd.DragSource
        public getComponent(): java.awt.Component
        public setComponent(arg0: java.awt.Component): void
        public getSourceActions(): number
        public setSourceActions(arg0: number | java.lang.Integer): void
        public getTriggerEvent(): java.awt.event.InputEvent
        public resetRecognizer(): void
        public addDragGestureListener(
          arg0: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$lambda
        ): void
        public removeDragGestureListener(
          arg0: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$lambda
        ): void
        protected fireDragGestureRecognized(arg0: number | java.lang.Integer, arg1: java.awt.Point): void
        protected appendEvent(arg0: java.awt.event.InputEvent): void
      }
    }
  }
}
