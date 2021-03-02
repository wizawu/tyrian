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
        protected getTabSize(): int
        protected drawLine(arg0: int, arg1: java.awt.Graphics, arg2: int, arg3: int): void
        protected drawLine(arg0: int, arg1: java.awt.Graphics2D, arg2: float, arg3: float): void
        protected drawUnselectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
        protected drawUnselectedText(arg0: java.awt.Graphics2D, arg1: float, arg2: float, arg3: int, arg4: int): float
        protected drawSelectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
        callDrawSelectedText(arg0: java.awt.Graphics, arg1: float, arg2: float, arg3: int, arg4: int): float
        protected drawSelectedText(arg0: java.awt.Graphics2D, arg1: float, arg2: float, arg3: int, arg4: int): float
        protected getLineBuffer(): javax.swing.text.Segment
        protected updateMetrics(): void
        public getPreferredSpan(arg0: int): float
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        adjustPaintRegion(arg0: java.awt.Shape): java.awt.Shape
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public setSize(arg0: float, arg1: float): void
        public nextTabStop(arg0: float, arg1: int): float
        protected updateDamage(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        protected damageLineRange(arg0: int, arg1: int, arg2: java.awt.Shape, arg3: java.awt.Component): void
        protected lineToRect(arg0: java.awt.Shape, arg1: int): java.awt.Rectangle
        static getFPMethodOverridden(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: javax.swing.text.PlainView$FPMethodArgs): boolean
      }

    }
  }
}
