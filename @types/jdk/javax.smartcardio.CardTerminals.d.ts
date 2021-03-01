declare namespace javax {
  namespace smartcardio {

    abstract class CardTerminals {

      protected constructor()
      public list(): java.util.List<javax.smartcardio.CardTerminal>
      public abstract list(arg0: javax.smartcardio.CardTerminals$State): java.util.List<javax.smartcardio.CardTerminal>
      public getTerminal(arg0: java.lang.String): javax.smartcardio.CardTerminal
      public waitForChange(): void
      public abstract waitForChange(arg0: long): boolean
    }

  }
}
