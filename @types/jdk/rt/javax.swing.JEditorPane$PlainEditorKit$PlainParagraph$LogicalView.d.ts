declare namespace javax {
    namespace swing {
class JEditorPane$PlainEditorKit$PlainParagraph$LogicalView extends javax.swing.text.CompositeView {
    protected getViewIndexAtPosition(arg0: int): int
    protected updateChildren(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): boolean
    protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public getPreferredSpan(arg0: int): float
    protected forwardUpdateToView(arg0: javax.swing.text.View, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
    protected isBefore(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
    protected isAfter(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
    protected getViewAtPoint(arg0: int, arg1: int, arg2: java.awt.Rectangle): javax.swing.text.View
    protected childAllocation(arg0: int, arg1: java.awt.Rectangle): void
    public static class: java.lang.Class<any>
}

    }
}