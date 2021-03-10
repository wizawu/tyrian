declare namespace javax {
  namespace smartcardio {

    abstract class Card {
      protected constructor()
      public abstract getATR(): javax.smartcardio.ATR
      public abstract getProtocol(): java.lang.String
      public abstract getBasicChannel(): javax.smartcardio.CardChannel
      public abstract openLogicalChannel(): javax.smartcardio.CardChannel
      public abstract beginExclusive(): void
      public abstract endExclusive(): void
      public abstract transmitControlCommand(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[]): number[]
      public abstract disconnect(arg0: boolean | java.lang.Boolean): void
    }

  }
}
