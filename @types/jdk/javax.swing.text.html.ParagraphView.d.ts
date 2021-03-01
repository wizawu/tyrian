declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class ParagraphView extends javax.swing.text.ParagraphView {

          public constructor(arg0: javax.swing.text.Element)
          public setParent(arg0: javax.swing.text.View): void
          public getAttributes(): javax.swing.text.AttributeSet
          protected setPropertiesFromAttributes(): void
          protected getStyleSheet(): javax.swing.text.html.StyleSheet
          protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
          public isVisible(): boolean
          public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
          public getPreferredSpan(arg0: int): float
          public getMinimumSpan(arg0: int): float
          public getMaximumSpan(arg0: int): float
        }

      }
    }
  }
}
