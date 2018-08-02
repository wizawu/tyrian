declare namespace sun {
    namespace misc {
        abstract class LRUCache<N, V> {
            public constructor(arg0: int)
            protected create(arg0: N): V
            protected hasName(arg0: V, arg1: N): boolean
            public static moveToFront(arg0: java.lang.Object[], arg1: int): void
            public forName(arg0: N): V
            public static class: java.lang.Class<any>
        }
    }
}