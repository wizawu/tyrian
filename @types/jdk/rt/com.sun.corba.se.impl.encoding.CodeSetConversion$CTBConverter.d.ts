declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        abstract class CodeSetConversion$CTBConverter {
                            public constructor()
                            public abstract convert(arg0: char): void
                            public abstract convert(arg0: java.lang.String | string): void
                            public abstract getNumBytes(): int
                            public abstract getMaxBytesPerChar(): float
                            public abstract isFixedWidthEncoding(): boolean
                            public abstract getAlignment(): int
                            public abstract getBytes(): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}