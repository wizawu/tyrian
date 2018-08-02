declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class CodeSetConversion$JavaBTCConverter extends com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter {
    protected btc: java.nio.charset.CharsetDecoder
    public constructor(arg0: com.sun.corba.se.impl.encoding.CodeSetConversion, arg1: com.sun.corba.se.impl.encoding.OSFCodeSetRegistry$Entry)
    public isFixedWidthEncoding(): boolean
    public getFixedCharWidth(): int
    public getNumChars(): int
    public getChars(arg0: byte[], arg1: int, arg2: int): char[]
    protected getConverter(arg0: java.lang.String | string): java.nio.charset.CharsetDecoder
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}