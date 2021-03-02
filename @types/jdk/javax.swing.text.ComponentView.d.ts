declare namespace javax {
  namespace swing {
    namespace text {

      class ComponentView extends javax.swing.text.View {
        public constructor(arg0: javax.swing.text.Element)
        protected createComponent(): java.awt.Component
        public getComponent(): java.awt.Component
        public paint(arg0: java.awt.Graphics, arg1: java.awt.Shape): void
        public getPreferredSpan(arg0: number | java.lang.Integer): number
        public getMinimumSpan(arg0: number | java.lang.Integer): number
        public getMaximumSpan(arg0: number | java.lang.Integer): number
        public getAlignment(arg0: number | java.lang.Integer): number
        public setParent(arg0: javax.swing.text.View): void
        setComponentParent(): void
        public modelToView(arg0: number | java.lang.Integer, arg1: java.awt.Shape, arg2: javax.swing.text.Position$Bias): java.awt.Shape
        public viewToModel(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.Shape, arg3: javax.swing.text.Position$Bias[]): number
      }

    }
  }
}
