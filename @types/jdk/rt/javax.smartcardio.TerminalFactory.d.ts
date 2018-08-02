declare namespace javax {
    namespace smartcardio {
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
    }
}