declare namespace jdk {
    namespace internal {
        namespace util {
            namespace xml {
                namespace impl {
class Attrs implements jdk.internal.org.xml.sax.Attributes {
    public constructor()
    public setLength(arg0: char): void
    public getLength(): int
    public getURI(arg0: int): string
    public getLocalName(arg0: int): string
    public getQName(arg0: int): string
    public getType(arg0: int): string
    public getValue(arg0: int): string
    public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public getIndex(arg0: java.lang.String | string): int
    public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getType(arg0: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string): string
    public isDeclared(arg0: int): boolean
    public isDeclared(arg0: java.lang.String | string): boolean
    public isDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public isSpecified(arg0: int): boolean
    public isSpecified(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public isSpecified(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}