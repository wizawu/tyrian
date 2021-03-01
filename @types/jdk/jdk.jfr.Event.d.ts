declare namespace jdk {
  namespace jfr {

    abstract class Event extends jdk.internal.event.Event {

      protected constructor()
      public readonly begin(): void
      public readonly end(): void
      public readonly commit(): void
      public readonly isEnabled(): boolean
      public readonly shouldCommit(): boolean
      public readonly set(arg0: int, arg1: java.lang.Object): void
    }

  }
}
