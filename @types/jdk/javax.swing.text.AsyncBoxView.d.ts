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
        public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer)
        public getMajorAxis(): number
        public getMinorAxis(): number
        public getTopInset(): number
        public setTopInset(arg0: number | java.lang.Float): void
        public getBottomInset(): number
        public setBottomInset(arg0: number | java.lang.Float): void
        public getLeftInset(): number
        public setLeftInset(arg0: number | java.lang.Float): void
        public getRightInset(): number
        public setRightInset(arg0: number | java.lang.Float): void
        protected getInsetSpan(arg0: number | java.lang.Integer): number
        protected setEstimatedMajorSpan(arg0: boolean | java.lang.Boolean): void
        protected getEstimatedMajorSpan(): boolean
        protected getChildState(arg0: number | java.lang.Integer): javax.swing.text.AsyncBoxView$ChildState
        protected getLayoutQueue(): javax.swing.text.LayoutQueue
        protected createChildState(arg0: javax.swing.text.View): javax.swing.text.AsyncBoxView$ChildState
        protected majorRequirementChange(arg0: javax.swing.text.AsyncBoxView$ChildState, arg1: number | java.lang.Float): void
        protected minorRequirementChange(arg0: javax.swing.text.AsyncBoxView$ChildState): void
        protected flushRequirementChanges(): void
        public replace(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.View[]): void
        protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        protected getViewIndexAtPosition(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): number
        protected updateLayout(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape): void
        public setParent(arg0: javax.swing.text.View): void
        public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
        public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        getSpanOnAxis(arg0: number | java.lang.Integer): number
        setSpanOnAxis(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getMaximumSpan(arg0: number | java.lang.Integer): number
        public getViewCount(): number
        public getView(arg0: number | java.lang.Integer): javax.swing.text.View
        public getChildAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Shape): java.awt.Shape
        public getViewIndex(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): number
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
        public getNextVisualPositionFrom(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias, arg2: java.awt.Shape, arg3: number | java.lang.Integer, arg4: javax.swing.text.Position$Bias[]): number
      }

    }
  }
}
