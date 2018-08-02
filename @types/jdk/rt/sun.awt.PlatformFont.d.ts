declare namespace sun {
    namespace awt {
        abstract class PlatformFont implements java.awt.peer.FontPeer {
            protected componentFonts: sun.awt.FontDescriptor[]
            protected defaultChar: char
            protected fontConfig: sun.awt.FontConfiguration
            protected defaultFont: sun.awt.FontDescriptor
            protected familyName: string
            protected static FONTCACHESIZE: int
            protected static FONTCACHEMASK: int
            protected static osVersion: string
            public constructor(arg0: java.lang.String | string, arg1: int)
            protected getMissingGlyphCharacter(): char
            public makeMultiCharsetString(arg0: java.lang.String | string): sun.awt.CharsetString[]
            public makeMultiCharsetString(arg0: java.lang.String | string, arg1: boolean): sun.awt.CharsetString[]
            public makeMultiCharsetString(arg0: char[], arg1: int, arg2: int): sun.awt.CharsetString[]
            public makeMultiCharsetString(arg0: char[], arg1: int, arg2: int, arg3: boolean): sun.awt.CharsetString[]
            public mightHaveMultiFontMetrics(): boolean
            public makeConvertedMultiFontString(arg0: java.lang.String | string): java.lang.Object[]
            public makeConvertedMultiFontChars(arg0: char[], arg1: int, arg2: int): java.lang.Object[]
            protected getFontCache(): java.lang.Object[]
            public static class: java.lang.Class<any>
        }
    }
}