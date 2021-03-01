declare namespace javax {
  namespace swing {
    namespace text {

      abstract class FlowView extends javax.swing.text.BoxView {

        protected layoutSpan: int
        protected layoutPool: javax.swing.text.View
        protected strategy: javax.swing.text.FlowView$FlowStrategy
        public constructor(arg0: javax.swing.text.Element, arg1: int)
        public getFlowAxis(): int
        public getFlowSpan(arg0: int): int
        public getFlowStart(arg0: int): int
        protected abstract createRow(): javax.swing.text.View
        protected loadChildren(arg0: javax.swing.text.ViewFactory): void
        protected getViewIndexAtPosition(arg0: int): int
        protected layout(arg0: int, arg1: int): void
        protected calculateMinorAxisRequirements(arg0: int, arg1: javax.swing.SizeRequirements): javax.swing.SizeRequirements
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public setParent(arg0: javax.swing.text.View): void
      }

    }
  }
}
