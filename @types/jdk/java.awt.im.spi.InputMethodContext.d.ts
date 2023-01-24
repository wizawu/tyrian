declare namespace java {
  namespace awt {
    namespace im {
      namespace spi {
        interface InputMethodContext extends java.awt.im.InputMethodRequests {
          dispatchInputMethodEvent(
            arg0: number | java.lang.Integer,
            arg1: java.text.AttributedCharacterIterator,
            arg2: number | java.lang.Integer,
            arg3: java.awt.font.TextHitInfo,
            arg4: java.awt.font.TextHitInfo
          ): void
          createInputMethodWindow(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): java.awt.Window
          createInputMethodJFrame(
            arg0: java.lang.String | string,
            arg1: boolean | java.lang.Boolean
          ): javax.swing.JFrame
          enableClientWindowNotification(arg0: java.awt.im.spi.InputMethod, arg1: boolean | java.lang.Boolean): void
        }
      }
    }
  }
}
