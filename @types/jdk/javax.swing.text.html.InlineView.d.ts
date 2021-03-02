declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class InlineView extends javax.swing.text.LabelView {
          public constructor(arg0: javax.swing.text.Element)
          public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
          public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
          public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
          public getAttributes(): javax.swing.text.AttributeSet
          public getBreakWeight(arg0: int, arg1: float, arg2: float): int
          public breakView(arg0: int, arg1: int, arg2: float, arg3: float): javax.swing.text.View
          protected setPropertiesFromAttributes(): void
          protected getStyleSheet(): javax.swing.text.html.StyleSheet
        }

      }
    }
  }
}
