declare namespace org {
    namespace xml {
        namespace sax {
            namespace helpers {
class AttributeListImpl implements org.xml.sax.AttributeList {
    public constructor()
    public constructor(arg0: org.xml.sax.AttributeList)
    public setAttributeList(arg0: org.xml.sax.AttributeList): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public removeAttribute(arg0: java.lang.String | string): void
    public clear(): void
    public getLength(): int
    public getName(arg0: int): string
    public getType(arg0: int): string
    public getValue(arg0: int): string
    public getType(arg0: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}