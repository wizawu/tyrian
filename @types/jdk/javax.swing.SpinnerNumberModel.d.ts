declare namespace javax {
  namespace swing {
    class SpinnerNumberModel extends javax.swing.AbstractSpinnerModel implements java.io.Serializable {
      public constructor(
        arg0: java.lang.Number,
        arg1: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>,
        arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>,
        arg3: java.lang.Number
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Double,
        arg1: number | java.lang.Double,
        arg2: number | java.lang.Double,
        arg3: number | java.lang.Double
      )
      public constructor()
      public setMinimum(arg0: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>): void
      public getMinimum(): java.lang.Comparable<unknown>
      public setMaximum(arg0: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>): void
      public getMaximum(): java.lang.Comparable<unknown>
      public setStepSize(arg0: java.lang.Number): void
      public getStepSize(): java.lang.Number
      public getNextValue(): java.lang.Object
      public getPreviousValue(): java.lang.Object
      public getNumber(): java.lang.Number
      public getValue(): java.lang.Object
      public setValue(arg0: java.lang.Object | any): void
    }
  }
}
