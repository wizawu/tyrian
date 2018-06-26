declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class Big5_HKSCS_2001 extends java.nio.charset.Charset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class IBM33722 extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class IBM33722$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class IBM834 extends java.nio.charset.Charset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class IBM949C extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class IBM949C$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class IBM964 extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class IBM964$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class ISCII91 extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISCII91$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                abstract class ISO2022 extends java.nio.charset.Charset {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String[])
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISO2022_CN extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public canEncode(): boolean
                    public static class: java.lang.Class<any>
                }
                class ISO2022_CN$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class ISO2022_CN_CNS extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public historicalName(): string
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISO2022_CN_CNS$$Lambda extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class ISO2022_CN_GB extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public historicalName(): string
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISO2022_CN_GB$$Lambda extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class ISO2022_JP extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String[])
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    protected doSBKANA(): boolean
                    public static class: java.lang.Class<any>
                }
                class ISO2022_JP$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class ISO2022_JP_2 extends sun.nio.cs.ext.ISO2022_JP {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISO2022_KR extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public historicalName(): string
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class ISO2022_KR$$Lambda extends sun.nio.cs.ext.ISO2022 implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
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
                class JISAutoDetect$$Lambda extends java.nio.charset.Charset implements sun.nio.cs.HistoricallyNamedCharset {
                    public constructor()
                }
                class MS50220 extends sun.nio.cs.ext.ISO2022_JP {
                    public constructor()
                    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String[])
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    protected doSBKANA(): boolean
                    public static class: java.lang.Class<any>
                }
                class MS50221 extends sun.nio.cs.ext.MS50220 {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    protected doSBKANA(): boolean
                    public static class: java.lang.Class<any>
                }
                class MS932_0213 extends java.nio.charset.Charset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class MSISO2022JP extends sun.nio.cs.ext.ISO2022_JP {
                    public constructor()
                    public historicalName(): string
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                class SJIS_0213 extends java.nio.charset.Charset {
                    public constructor()
                    public contains(arg0: java.nio.charset.Charset): boolean
                    public newDecoder(): java.nio.charset.CharsetDecoder
                    public newEncoder(): java.nio.charset.CharsetEncoder
                    public static class: java.lang.Class<any>
                }
                abstract class SimpleEUCEncoder extends java.nio.charset.CharsetEncoder {
                    protected index1: short[]
                    protected index2: string
                    protected index2a: string
                    protected index2b: string
                    protected index2c: string
                    protected mask1: int
                    protected mask2: int
                    protected shift: int
                    protected constructor(arg0: java.nio.charset.Charset)
                    public canEncode(arg0: char): boolean
                    protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public encode(arg0: char): byte
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
