declare namespace java {
  namespace beans {
    interface VetoableChangeListener$$lambda {
      (arg0: java.beans.PropertyChangeEvent): void
    }

    interface VetoableChangeListener extends java.util.EventListener {
      vetoableChange(arg0: java.beans.PropertyChangeEvent): void
    }
  }
}
