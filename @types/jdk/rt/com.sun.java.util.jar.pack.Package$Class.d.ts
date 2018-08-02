declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
class Package$Class extends com.sun.java.util.jar.pack.Attribute$Holder implements java.lang.Comparable<com.sun.java.util.jar.pack.Package$Class> {
    public getPackage(): com.sun.java.util.jar.pack.Package
    public getName(): string
    public compareTo(arg0: com.sun.java.util.jar.pack.Package$Class): int
    protected getCPMap(): com.sun.java.util.jar.pack.ConstantPool$Entry[]
    protected setCPMap(arg0: com.sun.java.util.jar.pack.ConstantPool$Entry[]): void
    public setInnerClasses(arg0: java.util.Collection<com.sun.java.util.jar.pack.Package$InnerClass>): void
    public computeGloballyImpliedICs(): java.util.List<com.sun.java.util.jar.pack.Package$InnerClass>
    public trimToSize(): void
    public strip(arg0: java.lang.String | string): void
    protected visitRefs(arg0: int, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
    protected visitInnerClassRefs(arg0: int, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): void
    public initFile(arg0: com.sun.java.util.jar.pack.Package$File): void
    public maybeChooseFileName(): void
    public canonicalFileName(): string
    public getFileName(arg0: java.io.File): java.io.File
    public getFileName(): java.io.File
    public toString(): string
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}