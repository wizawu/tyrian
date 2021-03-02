declare namespace javax {
  namespace swing {
    namespace text {

      class Utilities {
        public constructor()
        static getJComponent(arg0: javax.swing.text.View): javax.swing.JComponent
        public static drawTabbedText(arg0: javax.swing.text.Segment, arg1: int, arg2: int, arg3: java.awt.Graphics, arg4: javax.swing.text.TabExpander, arg5: int): int
        public static drawTabbedText(arg0: javax.swing.text.Segment, arg1: float, arg2: float, arg3: java.awt.Graphics2D, arg4: javax.swing.text.TabExpander, arg5: int): float
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: int, arg3: int, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander, arg6: int): int
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: int, arg3: int, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander, arg6: int, arg7: int[]): int
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: float, arg3: float, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander, arg6: int, arg7: int[], arg8: boolean): float
        public static getTabbedTextWidth(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: javax.swing.text.TabExpander, arg4: int): int
        public static getTabbedTextWidth(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: float, arg3: javax.swing.text.TabExpander, arg4: int): float
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: int, arg4: javax.swing.text.TabExpander, arg5: int, arg6: int[]): int
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: float, arg4: javax.swing.text.TabExpander, arg5: int, arg6: int[]): float
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: float, arg4: javax.swing.text.TabExpander, arg5: int, arg6: int[], arg7: boolean): float
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander, arg5: int): int
        static getTabbedTextOffset(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: int, arg4: int, arg5: javax.swing.text.TabExpander, arg6: int, arg7: int[]): int
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander, arg5: int, arg6: boolean): int
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: float, arg3: float, arg4: javax.swing.text.TabExpander, arg5: int, arg6: boolean): int
        static getTabbedTextOffset(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: float, arg4: float, arg5: javax.swing.text.TabExpander, arg6: int, arg7: boolean, arg8: int[], arg9: boolean): int
        public static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander, arg5: int): int
        static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: float, arg3: float, arg4: javax.swing.text.TabExpander, arg5: int, arg6: boolean): int
        public static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: float, arg3: float, arg4: javax.swing.text.TabExpander, arg5: int): int
        public static getRowStart(arg0: javax.swing.text.JTextComponent, arg1: int): int
        public static getRowEnd(arg0: javax.swing.text.JTextComponent, arg1: int): int
        public static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): int
        static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: float, arg3: boolean): int
        public static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: float): int
        public static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): int
        static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: float, arg3: boolean): int
        public static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: float): int
        public static getWordStart(arg0: javax.swing.text.JTextComponent, arg1: int): int
        public static getWordEnd(arg0: javax.swing.text.JTextComponent, arg1: int): int
        public static getNextWord(arg0: javax.swing.text.JTextComponent, arg1: int): int
        static getNextWordInParagraph(arg0: javax.swing.text.JTextComponent, arg1: javax.swing.text.Element, arg2: int, arg3: boolean): int
        public static getPreviousWord(arg0: javax.swing.text.JTextComponent, arg1: int): int
        static getPrevWordInParagraph(arg0: javax.swing.text.JTextComponent, arg1: javax.swing.text.Element, arg2: int): int
        public static getParagraphElement(arg0: javax.swing.text.JTextComponent, arg1: int): javax.swing.text.Element
        static isComposedTextElement(arg0: javax.swing.text.Document, arg1: int): boolean
        static isComposedTextElement(arg0: javax.swing.text.Element): boolean
        static isComposedTextAttributeDefined(arg0: javax.swing.text.AttributeSet): boolean
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: int, arg4: int, arg5: int, arg6: int): int
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: float, arg4: float, arg5: int, arg6: int): float
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: float, arg4: float, arg5: int, arg6: int, arg7: boolean): float
        static paintComposedText(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: javax.swing.text.GlyphView): void
        static isLeftToRight(arg0: java.awt.Component): boolean
        static getNextVisualPositionFrom(arg0: javax.swing.text.View, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: java.awt.Shape, arg4: int, arg5: javax.swing.text.Position$Bias[]): int
      }

    }
  }
}
