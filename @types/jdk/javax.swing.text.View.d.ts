declare namespace javax {
  namespace swing {
    namespace text {
      abstract class View implements javax.swing.SwingConstants {
        public static readonly BadBreakWeight: int
        public static readonly GoodBreakWeight: int
        public static readonly ExcellentBreakWeight: int
        public static readonly ForcedBreakWeight: int
        public static readonly X_AXIS: int
        public static readonly Y_AXIS: int
        static readonly sharedBiasReturn: javax.swing.text.Position$Bias[]
        firstUpdateIndex: int
        lastUpdateIndex: int
        public constructor(arg0: javax.swing.text.Element)
        public getParent(): javax.swing.text.View
        public isVisible(): boolean
        public abstract getPreferredSpan(arg0: number | java.lang.Integer): number
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getMaximumSpan(arg0: number | java.lang.Integer): number
        public preferenceChanged(
          arg0: javax.swing.text.View,
          arg1: boolean | java.lang.Boolean,
          arg2: boolean | java.lang.Boolean
        ): void
        public getAlignment(arg0: number | java.lang.Integer): number
        public abstract paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public setParent(arg0: javax.swing.text.View): void
        public getViewCount(): number
        public getView(arg0: number | java.lang.Integer): javax.swing.text.View
        public removeAll(): void
        public remove(arg0: number | java.lang.Integer): void
        public insert(arg0: number | java.lang.Integer, arg1: javax.swing.text.View): void
        public append(arg0: javax.swing.text.View): void
        public replace(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.View[]
        ): void
        public getViewIndex(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): number
        public getChildAllocation(arg0: number | java.lang.Integer, arg1: java.awt.Shape): java.awt.Shape
        public getNextVisualPositionFrom(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: java.awt.Shape,
          arg3: number | java.lang.Integer,
          arg4: javax.swing.text.Position$Bias[]
        ): number
        public abstract modelToView(
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
        public abstract viewToModel(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.Position$Bias[]
        ): number
        public insertUpdate(
          arg0: javax.swing.event.DocumentEvent,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        public removeUpdate(
          arg0: javax.swing.event.DocumentEvent,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        public changedUpdate(
          arg0: javax.swing.event.DocumentEvent,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        public getDocument(): javax.swing.text.Document
        public getStartOffset(): number
        public getEndOffset(): number
        public getElement(): javax.swing.text.Element
        public getGraphics(): java.awt.Graphics
        public getAttributes(): javax.swing.text.AttributeSet
        public breakView(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        ): javax.swing.text.View
        public createFragment(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.text.View
        public getBreakWeight(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float
        ): number
        public getResizeWeight(arg0: number | java.lang.Integer): number
        public setSize(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        public getContainer(): java.awt.Container
        public getViewFactory(): javax.swing.text.ViewFactory
        public getToolTipText(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: java.awt.Shape
        ): java.lang.String
        public getViewIndex(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: java.awt.Shape
        ): number
        protected updateChildren(
          arg0: javax.swing.event.DocumentEvent$ElementChange,
          arg1: javax.swing.event.DocumentEvent,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): boolean
        protected forwardUpdate(
          arg0: javax.swing.event.DocumentEvent$ElementChange,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        calculateUpdateIndexes(arg0: javax.swing.event.DocumentEvent): void
        updateAfterChange(): void
        protected forwardUpdateToView(
          arg0: javax.swing.text.View,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Shape,
          arg3: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        protected updateLayout(
          arg0: javax.swing.event.DocumentEvent$ElementChange,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Shape
        ): void
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape): number
      }
    }
  }
}
