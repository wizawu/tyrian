declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {

        class BlockView extends javax.swing.text.BoxView {
          public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer)
          public setParent(arg0: javax.swing.text.View): void
          protected calculateMajorAxisRequirements(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
          protected calculateMinorAxisRequirements(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
          isPercentage(arg0: number | java.lang.Integer, arg1: javax.swing.text.AttributeSet): boolean
          static spanSetFromAttributes(arg0: number | java.lang.Integer, arg1: javax.swing.SizeRequirements, arg2: javax.swing.text.html.CSS$LengthValue, arg3: javax.swing.text.html.CSS$LengthValue): boolean
          protected layoutMinorAxis(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: int[], arg3: int[]): void
          public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
          public getAttributes(): javax.swing.text.AttributeSet
          public getResizeWeight(arg0: number | java.lang.Integer): number
          public getAlignment(arg0: number | java.lang.Integer): number
          public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
          public getPreferredSpan(arg0: number | java.lang.Integer): number
          public getMinimumSpan(arg0: number | java.lang.Integer): number
          public getMaximumSpan(arg0: number | java.lang.Integer): number
          protected setPropertiesFromAttributes(): void
          protected getStyleSheet(): javax.swing.text.html.StyleSheet
        }

      }
    }
  }
}
