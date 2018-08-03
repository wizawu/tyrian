declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace utils {
                                class Base64 {
                                    public static BASE64DEFAULTLENGTH: int
                                    public static encode(arg0: java.math.BigInteger): string
                                    public static encode(arg0: java.math.BigInteger, arg1: int): byte[]
                                    public static decodeBigIntegerFromElement(arg0: org.w3c.dom.Element): java.math.BigInteger
                                    public static decodeBigIntegerFromText(arg0: org.w3c.dom.Text): java.math.BigInteger
                                    public static fillElementWithBigInteger(arg0: org.w3c.dom.Element, arg1: java.math.BigInteger): void
                                    public static decode(arg0: org.w3c.dom.Element): byte[]
                                    public static encodeToElement(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: byte[]): org.w3c.dom.Element
                                    public static decode(arg0: byte[]): byte[]
                                    public static encode(arg0: byte[]): string
                                    public static decode(arg0: java.io.BufferedReader): byte[]
                                    protected static isWhiteSpace(arg0: byte): boolean
                                    protected static isPad(arg0: byte): boolean
                                    public static encode(arg0: byte[], arg1: int): string
                                    public static decode(arg0: java.lang.String | string): byte[]
                                    protected static getBytesInternal(arg0: java.lang.String | string, arg1: byte[]): int
                                    protected static decodeInternal(arg0: byte[], arg1: int): byte[]
                                    public static decode(arg0: java.lang.String | string, arg1: java.io.OutputStream): void
                                    public static decode(arg0: byte[], arg1: java.io.OutputStream): void
                                    protected static decode(arg0: byte[], arg1: java.io.OutputStream, arg2: int): void
                                    public static decode(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
                                    protected static removeWhiteSpace(arg0: byte[]): int
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}