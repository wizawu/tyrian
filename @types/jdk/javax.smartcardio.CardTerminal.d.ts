declare namespace javax {
  namespace smartcardio {
    abstract class CardTerminal {
      protected constructor()
      public abstract getName(): java.lang.String
      public abstract connect(arg0: java.lang.String | string): javax.smartcardio.Card
      public abstract isCardPresent(): boolean
      public abstract waitForCardPresent(arg0: number | java.lang.Long): boolean
      public abstract waitForCardAbsent(arg0: number | java.lang.Long): boolean
    }
  }
}
