declare namespace javax {
    namespace swing {
        namespace text {
            class ParagraphView extends javax.swing.text.FlowView implements javax.swing.text.TabExpander {
                protected firstLineIndent: int
                public constructor(arg0: javax.swing.text.Element)
                protected setJustification(arg0: int): void
                protected setLineSpacing(arg0: float): void
                protected setFirstLineIndent(arg0: float): void
                protected setPropertiesFromAttributes(): void
                protected getLayoutViewCount(): int
                protected getLayoutView(arg0: int): javax.swing.text.View
                protected getNextNorthSouthVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
                protected getClosestPositionTo(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[], arg5: int, arg6: int): int
                protected flipEastAndWestAtEnds(arg0: int, arg1: javax.swing.text.Position$Bias): boolean
                public getFlowSpan(arg0: int): int
                public getFlowStart(arg0: int): int
                protected createRow(): javax.swing.text.View
                public nextTabStop(arg0: float, arg1: int): float
                protected getTabSet(): javax.swing.text.TabSet
                protected getPartialSize(arg0: int, arg1: int): float
                protected findOffsetToCharactersInString(arg0: char[], arg1: int): int
                protected getTabBase(): float
                public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                public getAlignment(arg0: int): float
                public breakView(arg0: int, arg1: float, arg2: java.awt.Shape): javax.swing.text.View
                public getBreakWeight(arg0: int, arg1: float): int
                protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}