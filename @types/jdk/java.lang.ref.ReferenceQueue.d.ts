declare namespace java {
  namespace lang {
    namespace ref {

      class ReferenceQueue<T> {
        static readonly NULL: java.lang.ref.ReferenceQueue<java.lang.Object>
        static readonly ENQUEUED: java.lang.ref.ReferenceQueue<java.lang.Object>
        static readonly $assertionsDisabled: boolean
        public constructor()
        enqueue(arg0: java.lang.ref.Reference<T>): boolean
        public poll(): java.lang.ref.Reference<T>
        public remove(arg0: long): java.lang.ref.Reference<T>
        public remove(): java.lang.ref.Reference<T>
        forEach(arg0: java.util.function$.Consumer<unknown>): void
      }

    }
  }
}
