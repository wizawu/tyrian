declare namespace java {
  namespace awt {
    namespace dnd {

      class DragSourceDragEvent extends java.awt.dnd.DragSourceEvent {
        public constructor(arg0: java.awt.dnd.DragSourceContext, arg1: int, arg2: int, arg3: int)
        public constructor(arg0: java.awt.dnd.DragSourceContext, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
        public getTargetActions(): int
        public getGestureModifiers(): int
        public getGestureModifiersEx(): int
        public getUserAction(): int
        public getDropAction(): int
      }

    }
  }
}
