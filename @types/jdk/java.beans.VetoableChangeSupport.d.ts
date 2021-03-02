declare namespace java {
  namespace beans {

    class VetoableChangeSupport implements java.io.Serializable {
      static readonly serialVersionUID: long
      public constructor(arg0: java.lang.Object | any)
      public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
      public addVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public removeVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      public getVetoableChangeListeners(arg0: java.lang.String | string): java.beans.VetoableChangeListener[]
      public fireVetoableChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
      public fireVetoableChange(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public fireVetoableChange(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean): void
      public fireVetoableChange(arg0: java.beans.PropertyChangeEvent): void
      public hasListeners(arg0: java.lang.String | string): boolean
    }

  }
}
