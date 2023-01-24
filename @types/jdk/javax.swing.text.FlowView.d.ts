declare namespace javax {
  namespace swing {
    namespace text {
      abstract class FlowView extends javax.swing.text.BoxView {
        protected layoutSpan: int
        protected layoutPool: javax.swing.text.View
        protected strategy: javax.swing.text.FlowView$FlowStrategy
        public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer)
        public getFlowAxis(): number
        public getFlowSpan(arg0: number | java.lang.Integer): number
        public getFlowStart(arg0: number | java.lang.Integer): number
        protected abstract createRow(): javax.swing.text.View
        protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        protected getViewIndexAtPosition(arg0: number | java.lang.Integer): number
        protected layout(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        protected calculateMinorAxisRequirements(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.SizeRequirements
        ): javax.swing.SizeRequirements
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
        public setParent(arg0: javax.swing.text.View): void
      }
    }
  }
}
