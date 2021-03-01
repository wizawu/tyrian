declare namespace java {
  namespace beans {

    class VetoableChangeListenerProxy extends java.util.EventListenerProxy<java.beans.VetoableChangeListener> implements java.beans.VetoableChangeListener {

      public constructor(arg0: java.lang.String, arg1: java.beans.VetoableChangeListener)
      public vetoableChange(arg0: java.beans.PropertyChangeEvent): void
      public getPropertyName(): java.lang.String
    }

  }
}
