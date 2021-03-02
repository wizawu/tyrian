declare namespace javax {
  namespace swing {
    namespace text {

      class PlainView extends javax.swing.text.View implements javax.swing.text.TabExpander {
        protected metrics: java.awt.FontMetrics
        longLine: javax.swing.text.Element
        font: java.awt.Font
        lineBuffer: javax.swing.text.Segment
        tabSize: float
        tabBase: int
        sel0: int
        sel1: int
        unselected: java.awt.Color
        selected: java.awt.Color
        firstLineOffset: int
        readonly drawLineOverridden: boolean
        readonly drawSelectedTextOverridden: boolean
        readonly drawUnselectedTextOverridden: boolean
        readonly useFloatingPointAPI: boolean
        public constructor(arg0: javax.swing.text.Element)
        protected getTabSize(): number
        protected drawLine(arg0: number | java.lang.Integer, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        protected drawLine(arg0: number | java.lang.Integer, arg1: java.awt.Graphics2D, arg2: number | java.lang.Float, arg3: number | java.lang.Float): void
        protected drawUnselectedText(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawUnselectedText(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawSelectedText(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        callDrawSelectedText(arg0: java.awt.Graphics, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawSelectedText(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected getLineBuffer(): javax.swing.text.Segment
        protected updateMetrics(): void
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        adjustPaintRegion(arg0: java.awt.Shape): java.awt.Shape
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public nextTabStop(arg0: number | java.lang.Float, arg1: number | java.lang.Integer): number
        protected updateDamage(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        protected damageLineRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.Shape, arg3: java.awt.Component): void
        protected lineToRect(arg0: java.awt.Shape, arg1: number | java.lang.Integer): java.awt.Rectangle
        static getFPMethodOverridden(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: javax.swing.text.PlainView$FPMethodArgs): boolean
      }

    }
  }
}
