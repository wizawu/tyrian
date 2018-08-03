declare namespace javax {
    namespace swing {
        namespace text {
            class WrappedPlainView extends javax.swing.text.BoxView implements javax.swing.text.TabExpander {
                public constructor(arg0: javax.swing.text.Element)
                public constructor(arg0: javax.swing.text.Element, arg1: boolean)
                protected getTabSize(): int
                protected drawLine(arg0: int, arg1: int, arg2: java.awt.Graphics, arg3: int, arg4: int): void
                protected drawUnselectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
                protected drawSelectedText(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int): int
                protected getLineBuffer(): javax.swing.text.Segment
                protected calculateBreakPosition(arg0: int, arg1: int): int
                protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public nextTabStop(arg0: float, arg1: int): float
                public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                public setSize(arg0: float, arg1: float): void
                public getPreferredSpan(arg0: int): float
                public getMinimumSpan(arg0: int): float
                public getMaximumSpan(arg0: int): float
                public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}