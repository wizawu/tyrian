declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class TableView$RowView extends javax.swing.text.BoxView {
                    public constructor(arg0: javax.swing.text.html.TableView, arg1: javax.swing.text.Element)
                    public getAttributes(): javax.swing.text.AttributeSet
                    protected getStyleSheet(): javax.swing.text.html.StyleSheet
                    public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean, arg2: boolean): void
                    protected calculateMajorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                    public getMinimumSpan(arg0: int): float
                    public getMaximumSpan(arg0: int): float
                    public getPreferredSpan(arg0: int): float
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                    public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
                    protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
                    protected layoutMajorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
                    protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
                    public getResizeWeight(arg0: int): int
                    protected getViewAtPosition(arg0: int, arg1: java.awt.Rectangle): javax.swing.text.View
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}