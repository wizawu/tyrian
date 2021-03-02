declare namespace javax {
  namespace swing {
    namespace text {

      class AsyncBoxView extends javax.swing.text.View {
        axis: int
        stats: java.util.List<javax.swing.text.AsyncBoxView$ChildState>
        majorSpan: float
        estimatedMajorSpan: boolean
        minorSpan: float
        protected locator: javax.swing.text.AsyncBoxView$ChildLocator
        topInset: float
        bottomInset: float
        leftInset: float
        rightInset: float
        minRequest: javax.swing.text.AsyncBoxView$ChildState
        prefRequest: javax.swing.text.AsyncBoxView$ChildState
        majorChanged: boolean
        minorChanged: boolean
        flushTask: java.lang.Runnable
        changing: javax.swing.text.AsyncBoxView$ChildState
        public constructor(arg0: javax.swing.text.Element, arg1: int)
        public getMajorAxis(): int
        public getMinorAxis(): int
        public getTopInset(): float
        public setTopInset(arg0: float): void
        public getBottomInset(): float
        public setBottomInset(arg0: float): void
        public getLeftInset(): float
        public setLeftInset(arg0: float): void
        public getRightInset(): float
        public setRightInset(arg0: float): void
        protected getInsetSpan(arg0: int): float
        protected setEstimatedMajorSpan(arg0: boolean): void
        protected getEstimatedMajorSpan(): boolean
        protected getChildState(arg0: int): javax.swing.text.AsyncBoxView$ChildState
        protected getLayoutQueue(): javax.swing.text.LayoutQueue
        protected createChildState(arg0: javax.swing.text.View): javax.swing.text.AsyncBoxView$ChildState
        protected majorRequirementChange(arg0: javax.swing.text.AsyncBoxView$ChildState, arg1: float): void
        protected minorRequirementChange(arg0: javax.swing.text.AsyncBoxView$ChildState): void
        protected flushRequirementChanges(): void
        public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
        protected loadChildren(arg0: javax.swing.text.ViewFactory): void
        protected getViewIndexAtPosition(arg0: int, arg1: javax.swing.text.Position$Bias): int
        protected updateLayout(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape): void
        public setParent(arg0: javax.swing.text.View): void
        public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean, arg2: boolean): void
        public setSize(arg0: float, arg1: float): void
        getSpanOnAxis(arg0: int): float
        setSpanOnAxis(arg0: int, arg1: float): void
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getPreferredSpan(arg0: int): float
        public getMinimumSpan(arg0: int): float
        public getMaximumSpan(arg0: int): float
        public getViewCount(): int
        public getView(arg0: int): javax.swing.text.View
        public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
        public getViewIndex(arg0: int, arg1: javax.swing.text.Position$Bias): int
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public getNextVisualPositionFrom(arg0: int, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
      }

    }
  }
}
