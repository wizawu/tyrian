declare namespace sun {
    namespace security {
        namespace smartcardio {
class ChannelImpl extends javax.smartcardio.CardChannel {
    public getCard(): javax.smartcardio.Card
    public getChannelNumber(): int
    public transmit(arg0: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU
    public transmit(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
    public close(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}