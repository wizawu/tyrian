declare namespace sun {
    namespace java2d {
        class Disposer implements java.lang.Runnable {
            public static readonly WEAK: int
            public static readonly PHANTOM: int
            public static refType: int
            public static pollingQueue: boolean
            public constructor()
            public static addRecord(arg0: java.lang.Object, arg1: long, arg2: long): void
            public static addRecord(arg0: java.lang.Object, arg1: sun.java2d.DisposerRecord | sun.java2d.DisposerRecord$$Lambda): void
            public run(): void
            public static pollRemove(): void
            public static addReference(arg0: java.lang.ref.Reference, arg1: sun.java2d.DisposerRecord | sun.java2d.DisposerRecord$$Lambda): void
            public static addObjectRecord(arg0: java.lang.Object, arg1: sun.java2d.DisposerRecord | sun.java2d.DisposerRecord$$Lambda): void
            public static getQueue(): java.lang.ref.ReferenceQueue
            public static class: java.lang.Class<any>
        }
    }
}