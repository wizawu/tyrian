declare namespace sun {
    namespace awt {
        class AppContext {
            public static EVENT_QUEUE_KEY: java.lang.Object
            public static EVENT_QUEUE_LOCK_KEY: java.lang.Object
            public static EVENT_QUEUE_COND_KEY: java.lang.Object
            public static DISPOSED_PROPERTY_NAME: string
            public static GUI_DISPOSED: string
            public static getAppContexts(): java.util.Set<sun.awt.AppContext>
            public isDisposed(): boolean
            public static getAppContext(): sun.awt.AppContext
            public static isMainContext(arg0: sun.awt.AppContext): boolean
            public dispose(): void
            public get(arg0: java.lang.Object): java.lang.Object
            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public remove(arg0: java.lang.Object): java.lang.Object
            public getThreadGroup(): java.lang.ThreadGroup
            public getContextClassLoader(): java.lang.ClassLoader
            public toString(): string
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
            public addPropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public removePropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
            public static getSoftReferenceValue<T>(arg0: java.lang.Object, arg1: java.util.function$.Supplier<T> | java.util.function$.Supplier$$Lambda<T>): T
            public static class: java.lang.Class<any>
        }
    }
}