declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
class BlockView extends javax.swing.text.BoxView {
    public constructor(arg0: javax.swing.text.Element, arg1: int)
    public setParent(arg0: javax.swing.text.View): void
    protected calculateMajorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
    public getAttributes(): javax.swing.text.AttributeSet
    public getResizeWeight(arg0: int): int
    public getAlignment(arg0: int): float
    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public getPreferredSpan(arg0: int): float
    public getMinimumSpan(arg0: int): float
    public getMaximumSpan(arg0: int): float
    protected setPropertiesFromAttributes(): void
    protected getStyleSheet(): javax.swing.text.html.StyleSheet
    public static class: java.lang.Class<any>
}

            }
        }
    }
}