declare namespace org {
    namespace xml {
        namespace sax {
            namespace ext {
class Attributes2Impl extends org.xml.sax.helpers.AttributesImpl implements org.xml.sax.ext.Attributes2 {
    public constructor()
    public constructor(arg0: org.xml.sax.Attributes)
    public isDeclared(arg0: int): boolean
    public isDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public isDeclared(arg0: java.lang.String | string): boolean
    public isSpecified(arg0: int): boolean
    public isSpecified(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public isSpecified(arg0: java.lang.String | string): boolean
    public setAttributes(arg0: org.xml.sax.Attributes): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public removeAttribute(arg0: int): void
    public setDeclared(arg0: int, arg1: boolean): void
    public setSpecified(arg0: int, arg1: boolean): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}