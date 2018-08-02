declare namespace javax {
    namespace swing {
        namespace text {
class ComponentView extends javax.swing.text.View {
    public constructor(arg0: javax.swing.text.Element)
    protected createComponent(): java.awt.Component
    public getComponent(): java.awt.Component
    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
    public getPreferredSpan(arg0: int): float
    public getMinimumSpan(arg0: int): float
    public getMaximumSpan(arg0: int): float
    public getAlignment(arg0: int): float
    public setParent(arg0: javax.swing.text.View): void
    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
    public static class: java.lang.Class<any>
}

        }
    }
}