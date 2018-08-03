declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    abstract class ArrayLikeIterator<T> implements java.util.Iterator<T> {
                        protected index: long
                        protected readonly includeUndefined: boolean
                        public isReverse(): boolean
                        protected bumpIndex(): long
                        public nextIndex(): long
                        public remove(): void
                        public abstract getLength(): long
                        public static arrayLikeIterator(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static reverseArrayLikeIterator(arg0: java.lang.Object): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static arrayLikeIterator(arg0: java.lang.Object, arg1: boolean): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static reverseArrayLikeIterator(arg0: java.lang.Object, arg1: boolean): jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object>
                        public static class: java.lang.Class<any>
                    }
                    interface ArrayLikeIterator$$Lambda<T> implements java.util.Iterator<T> {
                        (): long
                    }
                }
            }
        }
    }
}