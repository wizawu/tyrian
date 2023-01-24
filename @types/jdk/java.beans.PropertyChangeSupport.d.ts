declare namespace java {
  namespace beans {
    class PropertyChangeSupport implements java.io.Serializable {
      static readonly serialVersionUID: long
      public constructor(arg0: java.lang.Object | any)
      public addPropertyChangeListener(
        arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public removePropertyChangeListener(
        arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public addPropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public removePropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
      public firePropertyChange(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: java.lang.Object | any
      ): void
      public firePropertyChange(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public firePropertyChange(
        arg0: java.lang.String | string,
        arg1: boolean | java.lang.Boolean,
        arg2: boolean | java.lang.Boolean
      ): void
      public firePropertyChange(arg0: java.beans.PropertyChangeEvent): void
      public fireIndexedPropertyChange(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: java.lang.Object | any,
        arg3: java.lang.Object | any
      ): void
      public fireIndexedPropertyChange(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public fireIndexedPropertyChange(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: boolean | java.lang.Boolean,
        arg3: boolean | java.lang.Boolean
      ): void
      public hasListeners(arg0: java.lang.String | string): boolean
    }
  }
}
