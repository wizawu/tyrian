declare namespace java {
    namespace beans {
        interface VetoableChangeListener extends java.util.EventListener {
            vetoableChange(arg0: java.beans.PropertyChangeEvent): void
        }
        interface VetoableChangeListener$$Lambda extends java.util.EventListener {
            (arg0: java.beans.PropertyChangeEvent): void
        }
    }
}