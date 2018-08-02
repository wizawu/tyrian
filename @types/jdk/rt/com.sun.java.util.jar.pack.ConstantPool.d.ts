declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
abstract class ConstantPool {
    protected static noRefs: com.sun.java.util.jar.pack.ConstantPool$Entry[]
    protected static noClassRefs: com.sun.java.util.jar.pack.ConstantPool$ClassEntry[]
    public static getUtf8Entry(arg0: java.lang.String | string): com.sun.java.util.jar.pack.ConstantPool$Utf8Entry
    public static getClassEntry(arg0: java.lang.String | string): com.sun.java.util.jar.pack.ConstantPool$ClassEntry
    public static getLiteralEntry(arg0: java.lang.Comparable<any> | java.lang.Comparable$$Lambda<any>): com.sun.java.util.jar.pack.ConstantPool$LiteralEntry
    public static getStringEntry(arg0: java.lang.String | string): com.sun.java.util.jar.pack.ConstantPool$StringEntry
    public static getSignatureEntry(arg0: java.lang.String | string): com.sun.java.util.jar.pack.ConstantPool$SignatureEntry
    public static getSignatureEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$Utf8Entry, arg1: com.sun.java.util.jar.pack.ConstantPool$ClassEntry[]): com.sun.java.util.jar.pack.ConstantPool$SignatureEntry
    public static getDescriptorEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$Utf8Entry, arg1: com.sun.java.util.jar.pack.ConstantPool$SignatureEntry): com.sun.java.util.jar.pack.ConstantPool$DescriptorEntry
    public static getDescriptorEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$Utf8Entry, arg1: com.sun.java.util.jar.pack.ConstantPool$Utf8Entry): com.sun.java.util.jar.pack.ConstantPool$DescriptorEntry
    public static getMemberEntry(arg0: byte, arg1: com.sun.java.util.jar.pack.ConstantPool$ClassEntry, arg2: com.sun.java.util.jar.pack.ConstantPool$DescriptorEntry): com.sun.java.util.jar.pack.ConstantPool$MemberEntry
    public static getMethodHandleEntry(arg0: byte, arg1: com.sun.java.util.jar.pack.ConstantPool$MemberEntry): com.sun.java.util.jar.pack.ConstantPool$MethodHandleEntry
    public static getMethodTypeEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$SignatureEntry): com.sun.java.util.jar.pack.ConstantPool$MethodTypeEntry
    public static getMethodTypeEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$Utf8Entry): com.sun.java.util.jar.pack.ConstantPool$MethodTypeEntry
    public static getInvokeDynamicEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$BootstrapMethodEntry, arg1: com.sun.java.util.jar.pack.ConstantPool$DescriptorEntry): com.sun.java.util.jar.pack.ConstantPool$InvokeDynamicEntry
    public static getBootstrapMethodEntry(arg0: com.sun.java.util.jar.pack.ConstantPool$MethodHandleEntry, arg1: com.sun.java.util.jar.pack.ConstantPool$Entry[]): com.sun.java.util.jar.pack.ConstantPool$BootstrapMethodEntry
    public static makeIndex(arg0: java.lang.String | string, arg1: com.sun.java.util.jar.pack.ConstantPool$Entry[]): com.sun.java.util.jar.pack.ConstantPool$Index
    public static makeIndex(arg0: java.lang.String | string, arg1: java.util.Collection<com.sun.java.util.jar.pack.ConstantPool$Entry>): com.sun.java.util.jar.pack.ConstantPool$Index
    public static sort(arg0: com.sun.java.util.jar.pack.ConstantPool$Index): void
    public static partition(arg0: com.sun.java.util.jar.pack.ConstantPool$Index, arg1: int[]): com.sun.java.util.jar.pack.ConstantPool$Index[]
    public static partitionByTag(arg0: com.sun.java.util.jar.pack.ConstantPool$Index): com.sun.java.util.jar.pack.ConstantPool$Index[]
    public static completeReferencesIn(arg0: java.util.Set<com.sun.java.util.jar.pack.ConstantPool$Entry>, arg1: boolean): void
    public static completeReferencesIn(arg0: java.util.Set<com.sun.java.util.jar.pack.ConstantPool$Entry>, arg1: boolean, arg2: java.util.List<com.sun.java.util.jar.pack.ConstantPool$BootstrapMethodEntry>): void
    public static tagName(arg0: int): string
    public static refKindName(arg0: int): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}