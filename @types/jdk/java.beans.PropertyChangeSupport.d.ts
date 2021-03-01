declare namespace java {
  namespace beans {

    class PropertyChangeSupport implements java.io.Serializable {

      static readonly serialVersionUID: long
      public constructor(arg0: java.lang.Object)
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(arg0: java.lang.String): java.beans.PropertyChangeListener[]
      public firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      public firePropertyChange(arg0: java.lang.String, arg1: int, arg2: int): void
      public firePropertyChange(arg0: java.lang.String, arg1: boolean, arg2: boolean): void
      public firePropertyChange(arg0: java.beans.PropertyChangeEvent): void
      public fireIndexedPropertyChange(arg0: java.lang.String, arg1: int, arg2: java.lang.Object, arg3: java.lang.Object): void
      public fireIndexedPropertyChange(arg0: java.lang.String, arg1: int, arg2: int, arg3: int): void
      public fireIndexedPropertyChange(arg0: java.lang.String, arg1: int, arg2: boolean, arg3: boolean): void
      public hasListeners(arg0: java.lang.String): boolean
    }

  }
}
