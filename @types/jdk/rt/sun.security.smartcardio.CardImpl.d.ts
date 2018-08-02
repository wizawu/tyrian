declare namespace sun {
    namespace security {
        namespace smartcardio {
            class CardImpl extends javax.smartcardio.Card {
                public getATR(): javax.smartcardio.ATR
                public getProtocol(): string
                public getBasicChannel(): javax.smartcardio.CardChannel
                public openLogicalChannel(): javax.smartcardio.CardChannel
                public beginExclusive(): void
                public endExclusive(): void
                public transmitControlCommand(arg0: int, arg1: byte[]): byte[]
                public disconnect(arg0: boolean): void
                public toString(): string
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}