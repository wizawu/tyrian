declare namespace javax {
  namespace smartcardio {

    abstract class CardChannel {

      protected constructor()
      public abstract getCard(): javax.smartcardio.Card
      public abstract getChannelNumber(): int
      public abstract transmit(arg0: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU
      public abstract transmit(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
      public abstract close(): void
    }

  }
}
