declare namespace java {
  namespace awt {
    namespace dnd {
      class DragSourceDragEvent extends java.awt.dnd.DragSourceEvent {
        public constructor(
          arg0: java.awt.dnd.DragSourceContext,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.dnd.DragSourceContext,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        )
        public getTargetActions(): number
        public getGestureModifiers(): number
        public getGestureModifiersEx(): number
        public getUserAction(): number
        public getDropAction(): number
      }
    }
  }
}
