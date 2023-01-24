declare namespace javax {
  namespace swing {
    namespace text {
      class BoxView extends javax.swing.text.CompositeView {
        majorAxis: int
        majorSpan: int
        minorSpan: int
        majorReqValid: boolean
        minorReqValid: boolean
        majorRequest: javax.swing.SizeRequirements
        minorRequest: javax.swing.SizeRequirements
        majorAllocValid: boolean
        majorOffsets: int[]
        majorSpans: int[]
        minorAllocValid: boolean
        minorOffsets: int[]
        minorSpans: int[]
        tempRect: java.awt.Rectangle
        public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer)
        public getAxis(): number
        public setAxis(arg0: number | java.lang.Integer): void
        public layoutChanged(arg0: number | java.lang.Integer): void
        protected isLayoutValid(arg0: number | java.lang.Integer): boolean
        protected paintChild(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: number | java.lang.Integer): void
        public replace(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.View[]
        ): void
        updateLayoutArray(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number[]
        protected forwardUpdate(
          arg0: javax.swing.event.DocumentEvent$ElementChange,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        public preferenceChanged(
          arg0: javax.swing.text.View,
          arg1: boolean | java.lang.Boolean,
          arg2: boolean | java.lang.Boolean
        ): void
        public getResizeWeight(arg0: number | java.lang.Integer): number
        setSpanOnAxis(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
        updateChildSizes(): void
        getSpanOnAxis(arg0: number | java.lang.Integer): number
        public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getChildAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Shape): java.awt.Shape
        public modelToView(
          arg0: number | java.lang.Integer,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.Position$Bias
        ): java.awt.Shape
        public viewToModel(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.Position$Bias[]
        ): number
        public getAlignment(arg0: number | java.lang.Integer): number
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getMaximumSpan(arg0: number | java.lang.Integer): number
        protected isAllocationValid(): boolean
        protected isBefore(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): boolean
        protected isAfter(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): boolean
        protected getViewAtPoint(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.awt.Rectangle
        ): javax.swing.text.View
        protected childAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Rectangle): void
        protected layout(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public getWidth(): number
        public getHeight(): number
        protected layoutMajorAxis(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number[] | java.lang.Integer[]
        ): void
        protected layoutMinorAxis(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number[] | java.lang.Integer[]
        ): void
        protected calculateMajorAxisRequirements(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.SizeRequirements
        ): javax.swing.SizeRequirements
        protected calculateMinorAxisRequirements(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.SizeRequirements
        ): javax.swing.SizeRequirements
        checkRequests(arg0: number | java.lang.Integer): void
        protected baselineLayout(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[],
          arg3: number[] | java.lang.Integer[]
        ): void
        protected baselineRequirements(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.SizeRequirements
        ): javax.swing.SizeRequirements
        protected getOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        protected getSpan(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        protected flipEastAndWestAtEnds(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): boolean
      }
    }
  }
}
