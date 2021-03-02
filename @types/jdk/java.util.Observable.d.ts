declare namespace java {
  namespace util {

    class Observable {
      public constructor()
      public addObserver(arg0: java.util.Observer | java.util.Observer$$lambda): void
      public deleteObserver(arg0: java.util.Observer | java.util.Observer$$lambda): void
      public notifyObservers(): void
      public notifyObservers(arg0: java.lang.Object | any): void
      public deleteObservers(): void
      protected setChanged(): void
      protected clearChanged(): void
      public hasChanged(): boolean
      public countObservers(): number
    }

  }
}
