declare namespace java {
  namespace util {

    class Observable {
      public constructor()
      public addObserver(arg0: java.util.Observer): void
      public deleteObserver(arg0: java.util.Observer): void
      public notifyObservers(): void
      public notifyObservers(arg0: java.lang.Object): void
      public deleteObservers(): void
      protected setChanged(): void
      protected clearChanged(): void
      public hasChanged(): boolean
      public countObservers(): int
    }

  }
}
