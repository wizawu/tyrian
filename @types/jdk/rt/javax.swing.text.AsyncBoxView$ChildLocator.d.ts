declare namespace javax {
    namespace swing {
        namespace text {
            class AsyncBoxView$ChildLocator {
                protected lastValidOffset: javax.swing.text.AsyncBoxView$ChildState
                protected lastAlloc: java.awt.Rectangle
                protected childAlloc: java.awt.Rectangle
                public constructor(arg0: javax.swing.text.AsyncBoxView)
                public childChanged(arg0: javax.swing.text.AsyncBoxView$ChildState | javax.swing.text.AsyncBoxView$ChildState$$Lambda): void
                public paintChildren(arg0: java.awt.Graphics): void
                public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
                public getViewIndexAtPoint(arg0: float, arg1: float, arg2: java.awt.Shape): int
                protected getChildAllocation(arg0: int): java.awt.Shape
                protected setAllocation(arg0: java.awt.Shape): void
                protected getViewIndexAtVisualOffset(arg0: float): int
                public static class: java.lang.Class<any>
            }
        }
    }
}