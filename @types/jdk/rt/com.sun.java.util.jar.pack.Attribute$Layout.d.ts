declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
class Attribute$Layout implements java.lang.Comparable<com.sun.java.util.jar.pack.Attribute$Layout> {
    public ctype(): int
    public name(): string
    public layout(): string
    public canonicalInstance(): com.sun.java.util.jar.pack.Attribute
    public getNameRef(): com.sun.java.util.jar.pack.ConstantPool$Entry
    public isEmpty(): boolean
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public addContent(arg0: byte[], arg1: java.lang.Object): com.sun.java.util.jar.pack.Attribute
    public addContent(arg0: byte[]): com.sun.java.util.jar.pack.Attribute
    public equals(arg0: java.lang.Object): boolean
    public equals(arg0: com.sun.java.util.jar.pack.Attribute$Layout): boolean
    public hashCode(): int
    public compareTo(arg0: com.sun.java.util.jar.pack.Attribute$Layout): int
    public toString(): string
    public hasCallables(): boolean
    public getCallables(): com.sun.java.util.jar.pack.Attribute$Layout$Element[]
    public getEntryPoint(): com.sun.java.util.jar.pack.Attribute$Layout$Element[]
    public parse(arg0: com.sun.java.util.jar.pack.Attribute$Holder, arg1: byte[], arg2: int, arg3: int, arg4: com.sun.java.util.jar.pack.Attribute$ValueStream): void
    public unparse(arg0: com.sun.java.util.jar.pack.Attribute$ValueStream, arg1: java.io.ByteArrayOutputStream): java.lang.Object
    public layoutForClassVersion(arg0: com.sun.java.util.jar.pack.Package$Version): string
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}