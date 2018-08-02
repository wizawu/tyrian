declare namespace sun {
    namespace net {
        class TransferProtocolClient extends sun.net.NetworkClient {
            protected serverResponse: java.util.Vector<java.lang.String>
            protected lastReplyCode: int
            public readServerResponse(): int
            public sendServer(arg0: java.lang.String | string): void
            public getResponseString(): string
            public getResponseStrings(): java.util.Vector<java.lang.String>
            public constructor(arg0: java.lang.String | string, arg1: int)
            public constructor()
            public static class: java.lang.Class<any>
        }
    }
}