declare namespace javax {
    namespace smartcardio {
abstract class CardChannel {
    protected constructor()
    public getCard(): javax.smartcardio.Card
    public getChannelNumber(): int
    public transmit(arg0: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU
    public transmit(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
    public close(): void
    public static class: java.lang.Class<any>
}

    }
}