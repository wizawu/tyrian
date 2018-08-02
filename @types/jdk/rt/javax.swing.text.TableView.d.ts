declare namespace javax {
    namespace swing {
        namespace text {
abstract class TableView extends javax.swing.text.BoxView {
    public constructor(arg0: javax.swing.text.Element)
    protected createTableRow(arg0: javax.swing.text.Element): javax.swing.text.TableView$TableRow
    protected createTableCell(arg0: javax.swing.text.Element): javax.swing.text.TableView$TableCell
    protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
    protected layoutColumns(arg0: int, arg1: int[], arg2: int[], arg3: javax.swing.SizeRequirements[]): void
    protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
    protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
    protected getViewAtPosition(arg0: int, arg1: java.awt.Rectangle): javax.swing.text.View
    public static class: java.lang.Class<any>
}

        }
    }
}