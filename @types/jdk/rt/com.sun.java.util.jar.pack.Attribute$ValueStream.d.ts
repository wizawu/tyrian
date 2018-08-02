declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
abstract class Attribute$ValueStream {
    public constructor()
    public getInt(arg0: int): int
    public putInt(arg0: int, arg1: int): void
    public getRef(arg0: int): com.sun.java.util.jar.pack.ConstantPool$Entry
    public putRef(arg0: int, arg1: com.sun.java.util.jar.pack.ConstantPool$Entry): void
    public decodeBCI(arg0: int): int
    public encodeBCI(arg0: int): int
    public noteBackCall(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}