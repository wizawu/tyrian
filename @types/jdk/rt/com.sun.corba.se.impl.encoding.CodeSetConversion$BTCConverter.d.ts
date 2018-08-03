declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        abstract class CodeSetConversion$BTCConverter {
                            public constructor()
                            public abstract isFixedWidthEncoding(): boolean
                            public abstract getFixedCharWidth(): int
                            public abstract getNumChars(): int
                            public abstract getChars(arg0: byte[], arg1: int, arg2: int): char[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}