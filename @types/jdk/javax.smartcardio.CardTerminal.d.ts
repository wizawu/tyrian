declare namespace javax {
  namespace smartcardio {

    abstract class CardTerminal {

      protected constructor()
      public abstract getName(): java.lang.String
      public abstract connect(arg0: java.lang.String): javax.smartcardio.Card
      public abstract isCardPresent(): boolean
      public abstract waitForCardPresent(arg0: long): boolean
      public abstract waitForCardAbsent(arg0: long): boolean
    }

  }
}
