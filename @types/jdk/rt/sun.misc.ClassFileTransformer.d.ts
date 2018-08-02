declare namespace sun {
    namespace misc {
abstract class ClassFileTransformer {
    public constructor()
    public static add(arg0: sun.misc.ClassFileTransformer): void
    public static getTransformers(): sun.misc.ClassFileTransformer[]
    public transform(arg0: byte[], arg1: int, arg2: int): byte[]
    public static class: java.lang.Class<any>
}

    }
}