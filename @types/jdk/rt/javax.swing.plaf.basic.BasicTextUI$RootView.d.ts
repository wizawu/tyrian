declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicTextUI$RootView extends javax.swing.text.View {
                    public getAttributes(): javax.swing.text.AttributeSet
                    public getPreferredSpan(arg0: int): float
                    public getMinimumSpan(arg0: int): float
                    public getMaximumSpan(arg0: int): float
                    public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean, arg2: boolean): void
                    public getAlignment(arg0: int): float
                    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                    public setParent(arg0: javax.swing.text.View): void
                    public getViewCount(): int
                    public getView(arg0: int): javax.swing.text.View
                    public getViewIndex(arg0: int, arg1: javax.swing.text.Position$Bias): int
                    public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
                    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
                    public modelToView(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: java.awt.Shape): java.awt.Shape
                    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
                    public getNextVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
                    public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                    public getDocument(): javax.swing.text.Document
                    public getStartOffset(): int
                    public getEndOffset(): int
                    public getElement(): javax.swing.text.Element
                    public breakView(arg0: int, arg1: float, arg2: java.awt.Shape): javax.swing.text.View
                    public getResizeWeight(arg0: int): int
                    public setSize(arg0: float, arg1: float): void
                    public getContainer(): java.awt.Container
                    public getViewFactory(): javax.swing.text.ViewFactory
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}