declare namespace java {
  namespace beans {

    class VetoableChangeSupport implements java.io.Serializable {

      static readonly serialVersionUID: long
      public constructor(arg0: java.lang.Object)
      public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
      public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener): void
      public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
      public addVetoableChangeListener(arg0: java.lang.String, arg1: java.beans.VetoableChangeListener): void
      public removeVetoableChangeListener(arg0: java.lang.String, arg1: java.beans.VetoableChangeListener): void
      public getVetoableChangeListeners(arg0: java.lang.String): java.beans.VetoableChangeListener[]
      public fireVetoableChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      public fireVetoableChange(arg0: java.lang.String, arg1: int, arg2: int): void
      public fireVetoableChange(arg0: java.lang.String, arg1: boolean, arg2: boolean): void
      public fireVetoableChange(arg0: java.beans.PropertyChangeEvent): void
      public hasListeners(arg0: java.lang.String): boolean
    }

  }
}
