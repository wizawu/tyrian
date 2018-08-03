declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class JISAutoDetect extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public canEncode(): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public historicalName(): string
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static getByteMask1(): byte[]
                    public static getByteMask2(): byte[]
                    public static canBeSJIS1B(arg0: int): boolean
                    public static canBeEUCJP(arg0: int): boolean
                    public static canBeEUCKana(arg0: int, arg1: int): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}