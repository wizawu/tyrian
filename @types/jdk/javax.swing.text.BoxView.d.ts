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
        public constructor(arg0: javax.swing.text.Element, arg1: int)
        public getAxis(): int
        public setAxis(arg0: int): void
        public layoutChanged(arg0: int): void
        protected isLayoutValid(arg0: int): boolean
        protected paintChild(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: int): void
        public replace(arg0: int, arg1: int, arg2: javax.swing.text.View[]): void
        updateLayoutArray(arg0: int[], arg1: int, arg2: int): int[]
        protected forwardUpdate(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: java.awt.Shape, arg3: javax.swing.text.ViewFactory): void
        public preferenceChanged(arg0: javax.swing.text.View, arg1: boolean, arg2: boolean): void
        public getResizeWeight(arg0: int): int
        setSpanOnAxis(arg0: int, arg1: float): void
        updateChildSizes(): void
        getSpanOnAxis(arg0: int): float
        public setSize(arg0: float, arg1: float): void
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getChildAllocation(arg0: int, arg1: java.awt.Shape): java.awt.Shape
        public modelToView(arg0: int, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: float, arg1: float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): int
        public getAlignment(arg0: int): float
        public getPreferredSpan(arg0: int): float
        public getMinimumSpan(arg0: int): float
        public getMaximumSpan(arg0: int): float
        protected isAllocationValid(): boolean
        protected isBefore(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
        protected isAfter(arg0: int, arg1: int, arg2: java.awt.Rectangle): boolean
        protected getViewAtPoint(arg0: int, arg1: int, arg2: java.awt.Rectangle): javax.swing.text.View
        protected childAllocation(arg0: int, arg1: java.awt.Rectangle): void
        protected layout(arg0: int, arg1: int): void
        public getWidth(): int
        public getHeight(): int
        protected layoutMajorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
        protected layoutMinorAxis(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
        protected calculateMajorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        checkRequests(arg0: int): void
        protected baselineLayout(arg0: int, arg1: int, arg2: int[], arg3: int[]): void
        protected baselineRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        protected getOffset(arg0: int, arg1: int): int
        protected getSpan(arg0: int, arg1: int): int
        protected flipEastAndWestAtEnds(arg0: int, arg1: javax.swing.text.Position$Bias): boolean
      }

    }
  }
}
