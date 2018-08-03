declare namespace sun {
    namespace misc {
        abstract class ClassFileTransformer {
            public constructor()
            public static add(arg0: sun.misc.ClassFileTransformer | sun.misc.ClassFileTransformer$$Lambda): void
            public static getTransformers(): sun.misc.ClassFileTransformer[]
            public abstract transform(arg0: byte[], arg1: int, arg2: int): byte[]
            public static class: java.lang.Class<any>
        }
        interface ClassFileTransformer$$Lambda {
            (arg0: byte[], arg1: int, arg2: int): byte[]
        }
    }
}