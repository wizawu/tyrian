declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class XMLChar {
    public static MASK_VALID: int
    public static MASK_SPACE: int
    public static MASK_NAME_START: int
    public static MASK_NAME: int
    public static MASK_PUBID: int
    public static MASK_CONTENT: int
    public static MASK_NCNAME_START: int
    public static MASK_NCNAME: int
    public constructor()
    public static isSupplemental(arg0: int): boolean
    public static supplemental(arg0: char, arg1: char): int
    public static highSurrogate(arg0: int): char
    public static lowSurrogate(arg0: int): char
    public static isHighSurrogate(arg0: int): boolean
    public static isLowSurrogate(arg0: int): boolean
    public static isValid(arg0: int): boolean
    public static isInvalid(arg0: int): boolean
    public static isContent(arg0: int): boolean
    public static isMarkup(arg0: int): boolean
    public static isSpace(arg0: int): boolean
    public static isNameStart(arg0: int): boolean
    public static isName(arg0: int): boolean
    public static isNCNameStart(arg0: int): boolean
    public static isNCName(arg0: int): boolean
    public static isPubid(arg0: int): boolean
    public static isValidName(arg0: java.lang.String | string): boolean
    public static isValidNCName(arg0: java.lang.String | string): boolean
    public static isValidNmtoken(arg0: java.lang.String | string): boolean
    public static isValidIANAEncoding(arg0: java.lang.String | string): boolean
    public static isValidJavaEncoding(arg0: java.lang.String | string): boolean
    public static trim(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}