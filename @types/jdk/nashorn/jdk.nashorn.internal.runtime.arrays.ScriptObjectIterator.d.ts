declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class ScriptObjectIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected obj: jdk.nashorn.internal.runtime.ScriptObject
                        protected indexInArray(): boolean
                        public getLength(): long
                        public hasNext(): boolean
                        public next(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}