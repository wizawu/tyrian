declare namespace javax {
    namespace swing {
        abstract class SwingWorker<T, V> implements java.util.concurrent.RunnableFuture<T> {
            public constructor()
            protected abstract doInBackground(): T
            public run(): void
            protected publish(...arg0: V[]): void
            protected process(arg0: java.util.List<V>): void
            protected done(): void
            protected setProgress(arg0: int): void
            public getProgress(): int
            public execute(): void
            public cancel(arg0: boolean): boolean
            public isCancelled(): boolean
            public isDone(): boolean
            public get(): T
            public get(arg0: long, arg1: java.util.concurrent.TimeUnit): T
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            public getPropertyChangeSupport(): java.beans.PropertyChangeSupport
            public getState(): javax.swing.SwingWorker$StateValue
            public static class: java.lang.Class<any>
        }
        interface SwingWorker$$Lambda<T, V> implements java.util.concurrent.RunnableFuture<T> {
            (): T
        }
    }
}