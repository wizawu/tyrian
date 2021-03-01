declare namespace javax {
  namespace swing {

    abstract class Spring {

      public static readonly UNSET: int
      protected constructor()
      public abstract getMinimumValue(): int
      public abstract getPreferredValue(): int
      public abstract getMaximumValue(): int
      public abstract getValue(): int
      public abstract setValue(arg0: int): void
      getStrain(): double
      setStrain(arg0: double): void
      isCyclic(arg0: javax.swing.SpringLayout): boolean
      public static constant(arg0: int): javax.swing.Spring
      public static constant(arg0: int, arg1: int, arg2: int): javax.swing.Spring
      public static minus(arg0: javax.swing.Spring): javax.swing.Spring
      public static sum(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      public static max(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      static difference(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      public static scale(arg0: javax.swing.Spring, arg1: float): javax.swing.Spring
      public static width(arg0: java.awt.Component): javax.swing.Spring
      public static height(arg0: java.awt.Component): javax.swing.Spring
    }

  }
}
