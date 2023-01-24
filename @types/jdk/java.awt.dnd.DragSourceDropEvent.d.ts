declare namespace java {
  namespace awt {
    namespace dnd {
      class DragSourceDropEvent extends java.awt.dnd.DragSourceEvent {
        public constructor(
          arg0: java.awt.dnd.DragSourceContext,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: java.awt.dnd.DragSourceContext,
          arg1: number | java.lang.Integer,
          arg2: boolean | java.lang.Boolean,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        )
        public constructor(arg0: java.awt.dnd.DragSourceContext)
        public getDropSuccess(): boolean
        public getDropAction(): number
      }
    }
  }
}
