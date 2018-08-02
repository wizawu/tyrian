declare namespace javax {
    namespace swing {
        namespace text {
abstract class View implements javax.swing.SwingConstants {
    public static BadBreakWeight: int
    public static GoodBreakWeight: int
    public static ExcellentBreakWeight: int
    public static ForcedBreakWeight: int
    public static X_AXIS: int
    public static Y_AXIS: int
    public constructor(arg0: javax.swing.text.Element)
    public getParent(): javax.swing.text.View
    public isVisible(): boolean
    public getPreferredSpan(arg0: int): float
    public getMinimumSpan(arg0: int): float
    public getMaximumSpan(arg0: int): float
    public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean, arg2: boolean): void
    public getAlignment(arg0: int): float
    public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
    public setParent(arg0: javax.swing.text.View): void
    public getViewCount(): int
    public getView(arg0: int): javax.swing.text.View
    public removeAll(): void
    public remove(arg0: int): void
    public insert(arg0: int, arg1: javax.swing.text.View): void
    public append(arg0: javax.swing.text.View): void
    public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
    public getViewIndex(arg0: int, arg1: javax.swing.text.Position$Bias): int
    public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
    public getNextVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
    public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
    public modelToView(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: java.awt.Shape): java.awt.Shape
    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
    public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    public getDocument(): javax.swing.text.Document
    public getStartOffset(): int
    public getEndOffset(): int
    public getElement(): javax.swing.text.Element
    public getGraphics(): java.awt.Graphics
    public getAttributes(): javax.swing.text.AttributeSet
    public breakView(arg0: int, arg1: int, arg2: float, arg3: float): javax.swing.text.View
    public createFragment(arg0: int, arg1: int): javax.swing.text.View
    public getBreakWeight(arg0: int, arg1: float, arg2: float): int
    public getResizeWeight(arg0: int): int
    public setSize(arg0: float, arg1: float): void
    public getContainer(): java.awt.Container
    public getViewFactory(): javax.swing.text.ViewFactory
    public getToolTipText(arg0: float, arg1: float, arg2: java.awt.Shape): string
    public getViewIndex(arg0: float, arg1: float, arg2: java.awt.Shape): int
    protected updateChildren(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): boolean
    protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    protected forwardUpdateToView(arg0: javax.swing.text.View, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
    protected updateLayout(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape): void
    public modelToView(arg0: int, arg1: java.awt.Shape): java.awt.Shape
    public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape): int
    public static class: java.lang.Class<any>
}

        }
    }
}