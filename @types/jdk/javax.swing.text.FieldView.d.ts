declare namespace javax {
  namespace swing {
    namespace text {

      class FieldView extends javax.swing.text.PlainView {
        public constructor(arg0: javax.swing.text.Element)
        protected getFontMetrics(): java.awt.FontMetrics
        protected adjustAllocation(arg0: java.awt.Shape): java.awt.Shape
        updateVisibilityModel(): void
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        adjustPaintRegion(arg0: java.awt.Shape): java.awt.Shape
        public getPreferredSpan(arg0: int): float
        public getResizeWeight(arg0: int): int
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
      }

    }
  }
}
