declare namespace java {
    namespace awt {
        class Toolkit$DesktopPropertyChangeSupport extends java.beans.PropertyChangeSupport {
            public constructor(arg0: java.lang.Object)
            public addPropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public firePropertyChange(arg0: java.beans.PropertyChangeEvent): void
            public static class: java.lang.Class<any>
        }
    }
}