declare namespace sun {
    namespace misc {
        class Queue<T> {
            public constructor()
            public enqueue(arg0: T): void
            public dequeue(): T
            public dequeue(arg0: long): T
            public isEmpty(): boolean
            public elements(): java.util.Enumeration<T>
            public reverseElements(): java.util.Enumeration<T>
            public dump(arg0: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
    }
}