declare namespace javax {
  namespace swing {

    class SpinnerDateModel extends javax.swing.AbstractSpinnerModel implements java.io.Serializable {
      public constructor(arg0: java.util.Date, arg1: java.lang.Comparable<java.util.Date>, arg2: java.lang.Comparable<java.util.Date>, arg3: int)
      public constructor()
      public setStart(arg0: java.lang.Comparable<java.util.Date>): void
      public getStart(): java.lang.Comparable<java.util.Date>
      public setEnd(arg0: java.lang.Comparable<java.util.Date>): void
      public getEnd(): java.lang.Comparable<java.util.Date>
      public setCalendarField(arg0: int): void
      public getCalendarField(): int
      public getNextValue(): java.lang.Object
      public getPreviousValue(): java.lang.Object
      public getDate(): java.util.Date
      public getValue(): java.lang.Object
      public setValue(arg0: java.lang.Object): void
    }

  }
}
