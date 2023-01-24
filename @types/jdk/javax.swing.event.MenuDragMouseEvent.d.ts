declare namespace javax {
  namespace swing {
    namespace event {
      class MenuDragMouseEvent extends java.awt.event.MouseEvent {
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: boolean | java.lang.Boolean,
          arg8: javax.swing.MenuElement[],
          arg9: javax.swing.MenuSelectionManager
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer,
          arg8: number | java.lang.Integer,
          arg9: boolean | java.lang.Boolean,
          arg10: javax.swing.MenuElement[],
          arg11: javax.swing.MenuSelectionManager
        )
        public getPath(): javax.swing.MenuElement[]
        public getMenuSelectionManager(): javax.swing.MenuSelectionManager
      }
    }
  }
}
