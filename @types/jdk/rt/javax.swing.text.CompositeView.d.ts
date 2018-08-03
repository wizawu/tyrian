declare namespace javax {
    namespace swing {
        namespace text {
            abstract class CompositeView extends javax.swing.text.View {
                public constructor(arg0: javax.swing.text.Element)
                protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public setParent(arg0: javax.swing.text.View): void
                public getViewCount(): int
                public getView(arg0: int): javax.swing.text.View
                public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
                public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
                public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
                public modelToView(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: java.awt.Shape): java.awt.Shape
                public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
                public getNextVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
                public getViewIndex(arg0: int, arg1: javax.swing.text.Position$Bias): int
                protected abstract isBefore(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
                protected abstract isAfter(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
                protected abstract getViewAtPoint(arg0: int, arg1: int, arg2: java.awt.Rectangle): javax.swing.text.View
                protected abstract childAllocation(arg0: int, arg1: java.awt.Rectangle): void
                protected getViewAtPosition(arg0: int, arg1: java.awt.Rectangle): javax.swing.text.View
                protected getViewIndexAtPosition(arg0: int): int
                protected getInsideAllocation(arg0: java.awt.Shape): java.awt.Rectangle
                protected setParagraphInsets(arg0: javax.swing.text.AttributeSet): void
                protected setInsets(arg0: short, arg1: short, arg2: short, arg3: short): void
                protected getLeftInset(): short
                protected getRightInset(): short
                protected getTopInset(): short
                protected getBottomInset(): short
                protected getNextNorthSouthVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
                protected getNextEastWestVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
                protected flipEastAndWestAtEnds(arg0: int, arg1: javax.swing.text.Position$Bias): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}