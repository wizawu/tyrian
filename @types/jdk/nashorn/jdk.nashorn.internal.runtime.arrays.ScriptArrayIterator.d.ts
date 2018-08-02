declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class ScriptArrayIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected array: jdk.nashorn.internal.runtime.ScriptObject
                        protected length: long
                        protected constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: boolean)
                        protected indexInArray(): boolean
                        public next(): java.lang.Object
                        public getLength(): long
                        public hasNext(): boolean
                        public remove(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}