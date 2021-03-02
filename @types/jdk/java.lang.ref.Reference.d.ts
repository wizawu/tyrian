declare namespace java {
  namespace lang {
    namespace ref {

      abstract class Reference<T> {
        queue: java.lang.ref.ReferenceQueue<unknown>
        next: java.lang.ref.Reference
        public get(): T
        public clear(): void
        public isEnqueued(): boolean
        public enqueue(): boolean
        protected clone(): java.lang.Object
        constructor(arg0: T)
        constructor(arg0: T, arg1: java.lang.ref.ReferenceQueue<unknown>)
        public static reachabilityFence(arg0: java.lang.Object | any): void
      }

    }
  }
}
