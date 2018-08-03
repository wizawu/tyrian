declare namespace javax {
    namespace swing {
        namespace text {
            class Utilities {
                public constructor()
                public static drawTabbedText(arg0: javax.swing.text.Segment, arg1: int, arg2: int, arg3: java.awt.Graphics, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg5: int): int
                public static getTabbedTextWidth(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg4: int): int
                public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg5: int): int
                public static getTabbedTextOffset(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg5: int, arg6: boolean): int
                public static getBreakLocation(arg0: javax.swing.text.Segment, arg1: java.awt.FontMetrics, arg2: int, arg3: int, arg4: javax.swing.text.TabExpander | javax.swing.text.TabExpander$$Lambda, arg5: int): int
                public static getRowStart(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getRowEnd(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getPositionAbove(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): int
                public static getPositionBelow(arg0: javax.swing.text.JTextComponent, arg1: int, arg2: int): int
                public static getWordStart(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getWordEnd(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getNextWord(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getPreviousWord(arg0: javax.swing.text.JTextComponent, arg1: int): int
                public static getParagraphElement(arg0: javax.swing.text.JTextComponent, arg1: int): javax.swing.text.Element
                public static class: java.lang.Class<any>
            }
        }
    }
}