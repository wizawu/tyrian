declare namespace javax {
    namespace swing {
        abstract class AbstractAction implements javax.swing.Action , java.lang.Cloneable , java.io.Serializable {
            protected enabled: boolean
            protected changeSupport: javax.swing.event.SwingPropertyChangeSupport
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon)
            public getValue(arg0: java.lang.String | string): java.lang.Object
            public putValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public isEnabled(): boolean
            public setEnabled(arg0: boolean): void
            public getKeys(): java.lang.Object[]
            protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            protected clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}