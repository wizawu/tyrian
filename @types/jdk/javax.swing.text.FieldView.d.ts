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
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getResizeWeight(arg0: number | java.lang.Integer): number
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
      }

    }
  }
}
