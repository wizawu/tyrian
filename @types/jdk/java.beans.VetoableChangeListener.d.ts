declare namespace java {
  namespace beans {

    interface VetoableChangeListener extends java.util.EventListener {

      vetoableChange(arg0: java.beans.PropertyChangeEvent): void
    }

  }
}
