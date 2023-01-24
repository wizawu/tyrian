declare namespace javax {
  namespace swing {
    namespace event {
      class MenuKeyEvent extends java.awt.event.KeyEvent {
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: string | java.lang.Character,
          arg6: javax.swing.MenuElement[],
          arg7: javax.swing.MenuSelectionManager
        )
        public getPath(): javax.swing.MenuElement[]
        public getMenuSelectionManager(): javax.swing.MenuSelectionManager
      }
    }
  }
}
