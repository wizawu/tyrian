declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace arrays {
                    class JSObjectIterator extends jdk.nashorn.internal.runtime.arrays.ArrayLikeIterator<java.lang.Object> {
                        protected readonly obj: jdk.nashorn.api.scripting.JSObject
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