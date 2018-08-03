declare namespace sun {
    namespace swing {
        abstract class UIAction implements javax.swing.Action {
            public constructor(arg0: java.lang.String | string)
            public getName(): string
            public getValue(arg0: java.lang.String | string): java.lang.Object
            public putValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public setEnabled(arg0: boolean): void
            public isEnabled(): boolean
            public isEnabled(arg0: java.lang.Object): boolean
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public static class: java.lang.Class<any>
        }
    }
}