declare namespace java {
  namespace awt {
    namespace dnd {

      class DragSourceDropEvent extends java.awt.dnd.DragSourceEvent {
        public constructor(arg0: java.awt.dnd.DragSourceContext, arg1: int, arg2: boolean)
        public constructor(arg0: java.awt.dnd.DragSourceContext, arg1: int, arg2: boolean, arg3: int, arg4: int)
        public constructor(arg0: java.awt.dnd.DragSourceContext)
        public getDropSuccess(): boolean
        public getDropAction(): int
      }

    }
  }
}
