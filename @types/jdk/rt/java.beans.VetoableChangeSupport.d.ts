declare namespace java {
    namespace beans {
        class VetoableChangeSupport implements java.io.Serializable {
            public constructor(arg0: java.lang.Object)
            public addVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public removeVetoableChangeListener(arg0: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
            public addVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public removeVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$Lambda): void
            public getVetoableChangeListeners(arg0: java.lang.String | string): java.beans.VetoableChangeListener[]
            public fireVetoableChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public fireVetoableChange(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public fireVetoableChange(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
            public fireVetoableChange(arg0: java.beans.PropertyChangeEvent): void
            public hasListeners(arg0: java.lang.String | string): boolean
            public static class: java.lang.Class<any>
        }
    }
}