declare namespace javax {
  namespace swing {
    namespace text {

      class WrappedPlainView extends javax.swing.text.BoxView implements javax.swing.text.TabExpander {
        metrics: java.awt.FontMetrics
        lineBuffer: javax.swing.text.Segment
        widthChanging: boolean
        tabBase: int
        tabSize: float
        wordWrap: boolean
        sel0: int
        sel1: int
        unselected: java.awt.Color
        selected: java.awt.Color
        public constructor(arg0: javax.swing.text.Element)
        public constructor(arg0: javax.swing.text.Element, arg1: boolean | java.lang.Boolean)
        protected getTabSize(): number
        protected drawLine(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.Graphics, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        protected drawLine(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.Graphics2D, arg3: number | java.lang.Float, arg4: number | java.lang.Float): void
        protected drawUnselectedText(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawUnselectedText(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawSelectedText(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected drawSelectedText(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
        protected getLineBuffer(): javax.swing.text.Segment
        protected calculateBreakPosition(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        updateChildren(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape): void
        loadText(arg0: javax.swing.text.Segment, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        updateMetrics(): void
        public nextTabStop(arg0: number | java.lang.Float, arg1: number | java.lang.Integer): number
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getMaximumSpan(arg0: number | java.lang.Integer): number
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
      }

    }
  }
}
