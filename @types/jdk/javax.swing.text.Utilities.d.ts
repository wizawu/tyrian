declare namespace javax {
  namespace swing {
    namespace text {

      class Utilities {
        public constructor()
        static getJComponent(arg0: javax.swing.text.View): javax.swing.JComponent
        public static drawTabbedText(arg0: javax.swing.text.Segment, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.awt.Graphics, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer): number
        public static drawTabbedText(arg0: javax.swing.text.Segment, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: java.awt.Graphics2D, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer): number
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg6: number | java.lang.Integer): number
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg6: number | java.lang.Integer, arg7: int[]): number
        static drawTabbedText(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: java.awt.Graphics, arg5: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg6: number | java.lang.Integer, arg7: int[], arg8: boolean | java.lang.Boolean): number
        public static getTabbedTextWidth(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Integer, arg3: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg4: number | java.lang.Integer): number
        public static getTabbedTextWidth(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Float, arg3: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg4: number | java.lang.Integer): number
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: number | java.lang.Integer, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: int[]): number
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: number | java.lang.Float, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: int[]): number
        static getTabbedTextWidth(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: number | java.lang.Float, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: int[], arg7: boolean | java.lang.Boolean): number
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer): number
        static getTabbedTextOffset(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg6: number | java.lang.Integer, arg7: int[]): number
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean): number
        public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean): number
        static getTabbedTextOffset(arg0: javax.swing.text.View, arg1: javax.swing.text.Segment, arg2: java.awt.FontMetrics, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg6: number | java.lang.Integer, arg7: boolean | java.lang.Boolean, arg8: int[], arg9: boolean | java.lang.Boolean): number
        public static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer): number
        static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer, arg6: boolean | java.lang.Boolean): number
        public static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$lambda, arg5: number | java.lang.Integer): number
        public static getRowStart(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        public static getRowEnd(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        public static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Float, arg3: boolean | java.lang.Boolean): number
        public static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Float): number
        public static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Float, arg3: boolean | java.lang.Boolean): number
        public static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Float): number
        public static getWordStart(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        public static getWordEnd(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        public static getNextWord(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        static getNextWordInParagraph(arg0: javax.swing.text.JTextComponent, arg1: javax.swing.text.Element, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean): number
        public static getPreviousWord(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): number
        static getPrevWordInParagraph(arg0: javax.swing.text.JTextComponent, arg1: javax.swing.text.Element, arg2: number | java.lang.Integer): number
        public static getParagraphElement(arg0: javax.swing.text.JTextComponent, arg1: number | java.lang.Integer): javax.swing.text.Element
        static isComposedTextElement(arg0: javax.swing.text.Document, arg1: number | java.lang.Integer): boolean
        static isComposedTextElement(arg0: javax.swing.text.Element): boolean
        static isComposedTextAttributeDefined(arg0: javax.swing.text.AttributeSet): boolean
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): number
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): number
        static drawComposedText(arg0: javax.swing.text.View, arg1: javax.swing.text.AttributeSet, arg2: java.awt.Graphics, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: boolean | java.lang.Boolean): number
        static paintComposedText(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: javax.swing.text.GlyphView): void
        static isLeftToRight(arg0: java.awt.Component): boolean
        static getNextVisualPositionFrom(arg0: javax.swing.text.View, arg1: number | java.lang.Integer, arg2: javax.swing.text.Position$Bias, arg3: java.awt.Shape, arg4: number | java.lang.Integer, arg5: javax.swing.text.Position$Bias[]): number
      }

    }
  }
}
