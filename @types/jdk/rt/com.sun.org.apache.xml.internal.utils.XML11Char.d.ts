declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class XML11Char {
    public static MASK_XML11_VALID: int
    public static MASK_XML11_SPACE: int
    public static MASK_XML11_NAME_START: int
    public static MASK_XML11_NAME: int
    public static MASK_XML11_CONTROL: int
    public static MASK_XML11_CONTENT: int
    public static MASK_XML11_NCNAME_START: int
    public static MASK_XML11_NCNAME: int
    public static MASK_XML11_CONTENT_INTERNAL: int
    public constructor()
    public static isXML11Space(arg0: int): boolean
    public static isXML11Valid(arg0: int): boolean
    public static isXML11Invalid(arg0: int): boolean
    public static isXML11ValidLiteral(arg0: int): boolean
    public static isXML11Content(arg0: int): boolean
    public static isXML11InternalEntityContent(arg0: int): boolean
    public static isXML11NameStart(arg0: int): boolean
    public static isXML11Name(arg0: int): boolean
    public static isXML11NCNameStart(arg0: int): boolean
    public static isXML11NCName(arg0: int): boolean
    public static isXML11NameHighSurrogate(arg0: int): boolean
    public static isXML11ValidName(arg0: java.lang.String | string): boolean
    public static isXML11ValidNCName(arg0: java.lang.String | string): boolean
    public static isXML11ValidNmtoken(arg0: java.lang.String | string): boolean
    public static isXML11ValidQName(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}