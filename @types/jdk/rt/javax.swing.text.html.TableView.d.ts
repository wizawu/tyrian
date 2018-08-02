declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
class TableView extends javax.swing.text.BoxView implements javax.swing.text.ViewFactory {
    public constructor(arg0: javax.swing.text.Element)
    protected createTableRow(arg0: javax.swing.text.Element): javax.swing.text.html.TableView$RowView
    public getColumnCount(): int
    public getColumnSpan(arg0: int): int
    public getRowCount(): int
    public getMultiRowSpan(arg0: int, arg1: int): int
    public getRowSpan(arg0: int): int
    protected getViewAtPoint(arg0: int, arg1: int, arg2: java.awt.Rectangle): javax.swing.text.View
    protected getColumnsOccupied(arg0: javax.swing.text.View): int
    protected getRowsOccupied(arg0: javax.swing.text.View): int
    protected invalidateGrid(): void
    protected getStyleSheet(): javax.swing.text.html.StyleSheet
    protected setPropertiesFromAttributes(): void
    protected layoutColumns(arg0: int, arg1: int[], arg2: int[], arg3: javax.swing.SizeRequirements[]): void
    protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected calculateMajorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    protected layoutMajorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    protected getViewAtPosition(arg0: int, arg1: java.awt.Rectangle): javax.swing.text.View
    public getAttributes(): javax.swing.text.AttributeSet
    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
    public setParent(arg0: javax.swing.text.View): void
    public getViewFactory(): javax.swing.text.ViewFactory
    public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
    public create(arg0: javax.swing.text.Element): javax.swing.text.View
    public static class: java.lang.Class<any>
}

class TableView$$Lambda extends javax.swing.text.BoxView implements javax.swing.text.ViewFactory {
    public constructor(arg0: javax.swing.text.Element)
}

            }
        }
    }
}