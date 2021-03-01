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
        protected readonly clone(): java.lang.Object
        public getGlyphPainter(): javax.swing.text.GlyphView$GlyphPainter
        public setGlyphPainter(arg0: javax.swing.text.GlyphView$GlyphPainter): void
        public getText(arg0: int, arg1: int): javax.swing.text.Segment
        public getBackground(): java.awt.Color
        public getForeground(): java.awt.Color
        public getFont(): java.awt.Font
        public isUnderline(): boolean
        public isStrikeThrough(): boolean
        public isSubscript(): boolean
        public isSuperscript(): boolean
        public getTabExpander(): javax.swing.text.TabExpander
        protected checkPainter(): void
        public getTabbedSpan(arg0: float, arg1: javax.swing.text.TabExpander): float
        public getPartialSpan(arg0: int, arg1: int): float
        public getStartOffset(): int
        public getEndOffset(): int
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        readonly paintTextUsingColor(arg0: java.awt.Graphics, arg1: java.awt.Shape, arg2: java.awt.Color, arg3: int, arg4: int): void
        public getMinimumSpan(arg0: int): float
        public getPreferredSpan(arg0: int): float
        public getAlignment(arg0: int): float
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public getBreakWeight(arg0: int, arg1: float, arg2: float): int
        public breakView(arg0: int, arg1: int, arg2: float, arg3: float): javax.swing.text.View
        public createFragment(arg0: int, arg1: int): javax.swing.text.View
        public getNextVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        updateAfterChange(): void
        getJustificationInfo(arg0: int): javax.swing.text.GlyphView$JustificationInfo
      }

    }
  }
}
