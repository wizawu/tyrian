declare namespace javax {
  namespace swing {

    abstract class SwingWorker<T,V> implements java.util.concurrent.RunnableFuture<T> {

      public constructor()
      protected abstract doInBackground(): T
      public readonly run(): void
      protected readonly publish(...arg0: V[]): void
      protected process(arg0: java.util.List<V>): void
      protected done(): void
      protected readonly setProgress(arg0: int): void
      public readonly getProgress(): int
      public readonly execute(): void
      public readonly cancel(arg0: boolean): boolean
      public readonly isCancelled(): boolean
      public readonly isDone(): boolean
      public readonly get(): T
      public readonly get(arg0: long, arg1: java.util.concurrent.TimeUnit): T
      public readonly addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public readonly removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
      public readonly firePropertyChange(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.Object): void
      public readonly getPropertyChangeSupport(): java.beans.PropertyChangeSupport
      public readonly getState(): javax.swing.SwingWorker$StateValue
    }

  }
}
