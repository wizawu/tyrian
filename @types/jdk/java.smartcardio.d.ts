declare namespace javax {
    namespace smartcardio {
        class ATR implements java.io.Serializable {
            public constructor(arg0: byte[])
            public getBytes(): byte[]
            public getHistoricalBytes(): byte[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        abstract class Card {
            protected constructor()
            public getATR(): javax.smartcardio.ATR
            public getProtocol(): string
            public getBasicChannel(): javax.smartcardio.CardChannel
            public openLogicalChannel(): javax.smartcardio.CardChannel
            public beginExclusive(): void
            public endExclusive(): void
            public transmitControlCommand(arg0: int, arg1: byte[]): byte[]
            public disconnect(arg0: boolean): void
            public static class: java.lang.Class<any>
        }
        abstract class CardChannel {
            protected constructor()
            public getCard(): javax.smartcardio.Card
            public getChannelNumber(): int
            public transmit(arg0: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU
            public transmit(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            public close(): void
            public static class: java.lang.Class<any>
        }
        class CardException extends java.lang.Exception {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class CardNotPresentException extends javax.smartcardio.CardException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class CardPermission extends java.security.Permission {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public getActions(): string
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        abstract class CardTerminal {
            protected constructor()
            public getName(): string
            public connect(arg0: java.lang.String | string): javax.smartcardio.Card
            public isCardPresent(): boolean
            public waitForCardPresent(arg0: long): boolean
            public waitForCardAbsent(arg0: long): boolean
            public static class: java.lang.Class<any>
        }
        abstract class CardTerminals {
            protected constructor()
            public list(): java.util.List<javax.smartcardio.CardTerminal>
            public list(arg0: javax.smartcardio.CardTerminals$State): java.util.List<javax.smartcardio.CardTerminal>
            public getTerminal(arg0: java.lang.String | string): javax.smartcardio.CardTerminal
            public waitForChange(): void
            public waitForChange(arg0: long): boolean
            public static class: java.lang.Class<any>
        }
        class CommandAPDU implements java.io.Serializable {
            public constructor(arg0: byte[])
            public constructor(arg0: byte[], arg1: int, arg2: int)
            public constructor(arg0: java.nio.ByteBuffer)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[])
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int, arg7: int)
            public getCLA(): int
            public getINS(): int
            public getP1(): int
            public getP2(): int
            public getNc(): int
            public getData(): byte[]
            public getNe(): int
            public getBytes(): byte[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class ResponseAPDU implements java.io.Serializable {
            public constructor(arg0: byte[])
            public getNr(): int
            public getData(): byte[]
            public getSW1(): int
            public getSW2(): int
            public getSW(): int
            public getBytes(): byte[]
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class TerminalFactory {
            public static getDefaultType(): string
            public static getDefault(): javax.smartcardio.TerminalFactory
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Object): javax.smartcardio.TerminalFactory
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.String | string): javax.smartcardio.TerminalFactory
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.security.Provider): javax.smartcardio.TerminalFactory
            public getProvider(): java.security.Provider
            public getType(): string
            public terminals(): javax.smartcardio.CardTerminals
            public toString(): string
            public static class: java.lang.Class<any>
        }
        abstract class TerminalFactorySpi {
            protected constructor()
            protected engineTerminals(): javax.smartcardio.CardTerminals
            public static class: java.lang.Class<any>
        }
    }
}
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
            class ChannelImpl extends javax.smartcardio.CardChannel {
                public getCard(): javax.smartcardio.Card
                public getChannelNumber(): int
                public transmit(arg0: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU
                public transmit(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
                public close(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class PCSC extends sun.security.smartcardio.PlatformPCSC {
                public static toString(arg0: byte[]): string
                public static class: java.lang.Class<any>
            }
            class PCSCException extends java.lang.Exception {
                public static class: java.lang.Class<any>
            }
            class PCSCTerminals extends javax.smartcardio.CardTerminals {
                public list(arg0: javax.smartcardio.CardTerminals$State): java.util.List<javax.smartcardio.CardTerminal>
                public waitForChange(arg0: long): boolean
                public static class: java.lang.Class<any>
            }
            class SunPCSC extends java.security.Provider {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class TerminalImpl extends javax.smartcardio.CardTerminal {
                public getName(): string
                public connect(arg0: java.lang.String | string): javax.smartcardio.Card
                public isCardPresent(): boolean
                public waitForCardPresent(arg0: long): boolean
                public waitForCardAbsent(arg0: long): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
