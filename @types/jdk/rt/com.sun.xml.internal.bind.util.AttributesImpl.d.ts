declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace util {
class AttributesImpl implements org.xml.sax.Attributes {
    public constructor()
    public constructor(arg0: org.xml.sax.Attributes)
    public getLength(): int
    public getURI(arg0: int): string
    public getLocalName(arg0: int): string
    public getQName(arg0: int): string
    public getType(arg0: int): string
    public getValue(arg0: int): string
    public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public getIndexFast(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public getIndex(arg0: java.lang.String | string): int
    public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getType(arg0: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string): string
    public clear(): void
    public setAttributes(arg0: org.xml.sax.Attributes): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public setAttribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
    public removeAttribute(arg0: int): void
    public setURI(arg0: int, arg1: java.lang.String | string): void
    public setLocalName(arg0: int, arg1: java.lang.String | string): void
    public setQName(arg0: int, arg1: java.lang.String | string): void
    public setType(arg0: int, arg1: java.lang.String | string): void
    public setValue(arg0: int, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}