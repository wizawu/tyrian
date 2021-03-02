declare namespace jdk {
  namespace jfr {

    abstract class Event extends jdk.internal.event.Event {
      protected constructor()
      public begin(): void
      public end(): void
      public commit(): void
      public isEnabled(): boolean
      public shouldCommit(): boolean
      public set(arg0: int, arg1: java.lang.Object): void
    }

  }
}
