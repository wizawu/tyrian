declare namespace javax {
    namespace swing {
        namespace text {
class ParagraphView$Row extends javax.swing.text.BoxView {
    protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public getAttributes(): javax.swing.text.AttributeSet
    public getAlignment(arg0: int): float
    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
    public getStartOffset(): int
    public getEndOffset(): int
    protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected calculateMajorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected layoutMajorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    public getMaximumSpan(arg0: int): float
    protected getViewIndexAtPosition(arg0: int): int
    protected getLeftInset(): short
    protected getBottomInset(): short
    public static class: java.lang.Class<any>
}

        }
    }
}