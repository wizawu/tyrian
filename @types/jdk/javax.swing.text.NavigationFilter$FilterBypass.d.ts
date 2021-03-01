declare namespace javax {
  namespace swing {
    namespace text {

      abstract class NavigationFilter$FilterBypass {

        public constructor()
        public abstract getCaret(): javax.swing.text.Caret
        public abstract setDot(arg0: int, arg1: javax.swing.text.Position$Bias): void
        public abstract moveDot(arg0: int, arg1: javax.swing.text.Position$Bias): void
      }

    }
  }
}
