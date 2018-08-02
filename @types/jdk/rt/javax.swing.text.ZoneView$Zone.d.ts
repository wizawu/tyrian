declare namespace javax {
    namespace swing {
        namespace text {
            class ZoneView$Zone extends javax.swing.text.AsyncBoxView {
                public constructor(arg0: javax.swing.text.ZoneView, arg1: javax.swing.text.Element, arg2: javax.swing.text.Position | javax.swing.text.Position$$Lambda, arg3: javax.swing.text.Position | javax.swing.text.Position$$Lambda)
                public load(): void
                public unload(): void
                public isLoaded(): boolean
                protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                protected flushRequirementChanges(): void
                public getViewIndex(arg0: int, arg1: javax.swing.text.Position$Bias): int
                protected updateChildren(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): boolean
                public getAttributes(): javax.swing.text.AttributeSet
                public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
                public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
                public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
                public getStartOffset(): int
                public getEndOffset(): int
                public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}