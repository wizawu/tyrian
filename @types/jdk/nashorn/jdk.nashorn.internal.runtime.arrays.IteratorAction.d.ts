declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    abstract class IteratorAction<T> {
                        protected readonly self: java.lang.Object
                        protected thisArg: java.lang.Object
                        protected readonly callbackfn: java.lang.Object
                        protected result: T
                        protected index: long
                        public constructor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: T)
                        public constructor(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: T, arg4: jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> | jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator$$Lambda<java.lang.Object>)
                        protected applyLoopBegin(arg0: jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> | jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator$$Lambda<java.lang.Object>): void
                        public apply(): T
                        protected abstract forEach(arg0: java.lang.Object, arg1: double): boolean
                        public static class: java.lang.Class<any>
                    }
                    interface IteratorAction$$Lambda<T> {
                        (arg0: java.lang.Object, arg1: double): boolean
                    }
                }
            }
        }
    }
}