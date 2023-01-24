declare namespace javax {
  namespace swing {
    namespace text {
      abstract class CompositeView extends javax.swing.text.View {
        public constructor(arg0: javax.swing.text.Element)
        protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        public setParent(arg0: javax.swing.text.View): void
        public getViewCount(): number
        public getView(arg0: number | java.lang.Integer): javax.swing.text.View
        public replace(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.View[]
        ): void
        public getChildAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Shape): java.awt.Shape
        public modelToView(
          arg0: number | java.lang.Integer,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.Position$Bias
        ): java.awt.Shape
        public modelToView(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: number | java.lang.Integer,
          arg3: javax.swing.text.Position$Bias,
          arg4: java.awt.Shape
        ): java.awt.Shape
        public viewToModel(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.Position$Bias[]
        ): number
        public getNextVisualPositionFrom(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: java.awt.Shape,
          arg3: number | java.lang.Integer,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        public getViewIndex(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): number
        protected abstract isBefore(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): boolean
        protected abstract isAfter(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): boolean
        protected abstract getViewAtPoint(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): javax.swing.text.View
        protected abstract childAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): void
        protected getViewAtPosition(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): javax.swing.text.View
        protected getViewIndexAtPosition(arg0: number | java.lang.Integer): number
        protected getInsideAllocation(arg0: java.awt.Shape): java.awt.Rectangle
        protected setParagraphInsets(arg0: javax.swing.text.AttributeSet): void
        protected setInsets(
          arg0: number | java.lang.Short,
          arg1: number | java.lang.Short,
          arg2: number | java.lang.Short,
          arg3: number | java.lang.Short
        ): void
        protected getLeftInset(): number
        protected getRightInset(): number
        protected getTopInset(): number
        protected getBottomInset(): number
        protected getNextNorthSouthVisualPositionFrom(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: java.awt.Shape,
          arg3: number | java.lang.Integer,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        protected getNextEastWestVisualPositionFrom(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: java.awt.Shape,
          arg3: number | java.lang.Integer,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        protected flipEastAndWestAtEnds(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): boolean
      }
    }
  }
}
