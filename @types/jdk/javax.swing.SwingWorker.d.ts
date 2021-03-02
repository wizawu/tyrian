declare namespace javax {
  namespace swing {

    abstract class SwingWorker<T,V> implements java.util.concurrent.RunnableFuture<T> {
      public constructor()
      protected abstract doInBackground(): T
      public run(): void
      protected publish(...vargs: (V)[]): void
      protected process(arg0: java.util.List<V>): void
      protected done(): void
      protected setProgress(arg0: number | java.lang.Integer): void
      public getProgress(): number
      public execute(): void
      public cancel(arg0: boolean | java.lang.Boolean): boolean
      public isCancelled(): boolean
      public isDone(): boolean
      public get(): T
      public get(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): T
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
      public getPropertyChangeSupport(): java.beans.PropertyChangeSupport
      public getState(): javax.swing.SwingWorker$StateValue
    }

  }
}
