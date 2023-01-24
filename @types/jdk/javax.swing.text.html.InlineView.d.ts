declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class InlineView extends javax.swing.text.LabelView {
          public constructor(arg0: javax.swing.text.Element)
          public insertUpdate(
            arg0: javax.swing.event.DocumentEvent,
            arg1: java.awt.Shape,
            arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
          ): void
          public removeUpdate(
            arg0: javax.swing.event.DocumentEvent,
            arg1: java.awt.Shape,
            arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
          ): void
          public changedUpdate(
            arg0: javax.swing.event.DocumentEvent,
            arg1: java.awt.Shape,
            arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
          ): void
          public getAttributes(): javax.swing.text.AttributeSet
          public getBreakWeight(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Float,
            arg2: number | java.lang.Float
          ): number
          public breakView(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Float,
            arg3: number | java.lang.Float
          ): javax.swing.text.View
          protected setPropertiesFromAttributes(): void
          protected getStyleSheet(): javax.swing.text.html.StyleSheet
        }
      }
    }
  }
}
