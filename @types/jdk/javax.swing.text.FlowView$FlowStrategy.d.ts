declare namespace javax {
  namespace swing {
    namespace text {
      class FlowView$FlowStrategy {
        damageStart: javax.swing.text.Position
        viewBuffer: java.util.Vector<javax.swing.text.View>
        static readonly $assertionsDisabled: boolean
        public constructor()
        addDamage(arg0: javax.swing.text.FlowView, arg1: number | java.lang.Integer): void
        unsetDamage(): void
        public insertUpdate(
          arg0: javax.swing.text.FlowView,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Rectangle
        ): void
        public removeUpdate(
          arg0: javax.swing.text.FlowView,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Rectangle
        ): void
        public changedUpdate(
          arg0: javax.swing.text.FlowView,
          arg1: javax.swing.event.DocumentEvent,
          arg2: java.awt.Rectangle
        ): void
        protected getLogicalView(arg0: javax.swing.text.FlowView): javax.swing.text.View
        public layout(arg0: javax.swing.text.FlowView): void
        protected layoutRow(
          arg0: javax.swing.text.FlowView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        protected adjustRow(
          arg0: javax.swing.text.FlowView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): void
        reparentViews(arg0: javax.swing.text.View, arg1: number | java.lang.Integer): void
        protected createView(
          arg0: javax.swing.text.FlowView,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): javax.swing.text.View
      }
    }
  }
}
