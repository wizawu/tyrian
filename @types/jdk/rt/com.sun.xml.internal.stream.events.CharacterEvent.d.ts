declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class CharacterEvent extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.Characters {
                            public constructor()
                            public constructor(arg0: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: boolean)
                            public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: boolean)
                            protected init(): void
                            public getData(): string
                            public setData(arg0: java.lang.String | string): void
                            public isCData(): boolean
                            public toString(): string
                            protected writeAsEncodedUnicodeEx(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                            public isIgnorableWhiteSpace(): boolean
                            public isWhiteSpace(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}