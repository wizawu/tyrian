declare namespace javax {
  namespace swing {
    namespace text {

      class GlyphView extends javax.swing.text.View implements javax.swing.text.TabableView, java.lang.Cloneable {
        offset: int
        length: int
        impliedCR: boolean
        skipWidth: boolean
        expander: javax.swing.text.TabExpander
        x: int
        painter: javax.swing.text.GlyphView$GlyphPainter
        static defaultPainter: javax.swing.text.GlyphView$GlyphPainter
        public constructor(arg0: javax.swing.text.Element)
        protected clone(): java.lang.Object
        public getGlyphPainter(): javax.swing.text.GlyphView$GlyphPainter
        public setGlyphPainter(arg0: javax.swing.text.GlyphView$GlyphPainter): void
        public getText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.text.Segment
        public getBackground(): java.awt.Color
        public getForeground(): java.awt.Color
        public getFont(): java.awt.Font
        public isUnderline(): boolean
        public isStrikeThrough(): boolean
        public isSubscript(): boolean
        public isSuperscript(): boolean
        public getTabExpander(): javax.swing.text.TabExpander
        protected checkPainter(): void
        public getTabbedSpan(arg0: number | java.lang.Float, arg1: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda): number
        public getPartialSpan(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public getStartOffset(): number
        public getEndOffset(): number
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        paintTextUsingColor(arg0: java.awt.Graphics, arg1: java.awt.Shape, arg2: java.awt.Color, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getAlignment(arg0: number | java.lang.Integer): number
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
        public getBreakWeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Float, arg2: number | java.lang.Float): number
        public breakView(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Float, arg3: number | java.lang.Float): javax.swing.text.View
        public createFragment(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.text.View
        public getNextVisualPositionFrom(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: number | java.lang.Integer, arg4: javax.swing.text.Position$Bias[]): number
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        updateAfterChange(): void
        getJustificationInfo(arg0: number | java.lang.Integer): javax.swing.text.GlyphView$JustificationInfo
      }

    }
  }
}
