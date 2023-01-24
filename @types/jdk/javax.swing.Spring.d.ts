declare namespace javax {
  namespace swing {
    abstract class Spring {
      public static readonly UNSET: int
      protected constructor()
      public abstract getMinimumValue(): number
      public abstract getPreferredValue(): number
      public abstract getMaximumValue(): number
      public abstract getValue(): number
      public abstract setValue(arg0: number | java.lang.Integer): void
      getStrain(): number
      setStrain(arg0: number | java.lang.Double): void
      isCyclic(arg0: javax.swing.SpringLayout): boolean
      public static constant(arg0: number | java.lang.Integer): javax.swing.Spring
      public static constant(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): javax.swing.Spring
      public static minus(arg0: javax.swing.Spring): javax.swing.Spring
      public static sum(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      public static max(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      static difference(arg0: javax.swing.Spring, arg1: javax.swing.Spring): javax.swing.Spring
      public static scale(arg0: javax.swing.Spring, arg1: number | java.lang.Float): javax.swing.Spring
      public static width(arg0: java.awt.Component): javax.swing.Spring
      public static height(arg0: java.awt.Component): javax.swing.Spring
    }
  }
}
