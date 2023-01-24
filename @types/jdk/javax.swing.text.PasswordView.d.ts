declare namespace javax {
  namespace swing {
    namespace text {
      class PasswordView extends javax.swing.text.FieldView {
        static ONE: char[]
        public constructor(arg0: javax.swing.text.Element)
        protected drawUnselectedText(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): number
        protected drawUnselectedText(
          arg0: java.awt.Graphics2D,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): number
        protected drawSelectedText(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): number
        protected drawSelectedText(
          arg0: java.awt.Graphics2D,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer
        ): number
        protected drawEchoCharacter(
          arg0: java.awt.Graphics,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: string | java.lang.Character
        ): number
        protected drawEchoCharacter(
          arg0: java.awt.Graphics2D,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: string | java.lang.Character
        ): number
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
        public getPreferredSpan(arg0: number | java.lang.Integer): number
      }
    }
  }
}
