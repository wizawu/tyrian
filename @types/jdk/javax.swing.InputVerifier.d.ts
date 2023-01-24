declare namespace javax {
  namespace swing {
    abstract class InputVerifier {
      public constructor()
      public abstract verify(arg0: javax.swing.JComponent): boolean
      public shouldYieldFocus(arg0: javax.swing.JComponent): boolean
      public verifyTarget(arg0: javax.swing.JComponent): boolean
      public shouldYieldFocus(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent): boolean
    }
  }
}
