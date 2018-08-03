declare namespace javax {
    namespace smartcardio {
        abstract class Card {
            protected constructor()
            public abstract getATR(): javax.smartcardio.ATR
            public abstract getProtocol(): string
            public abstract getBasicChannel(): javax.smartcardio.CardChannel
            public abstract openLogicalChannel(): javax.smartcardio.CardChannel
            public abstract beginExclusive(): void
            public abstract endExclusive(): void
            public abstract transmitControlCommand(arg0: int, arg1: byte[]): byte[]
            public abstract disconnect(arg0: boolean): void
            public static class: java.lang.Class<any>
        }
    }
}