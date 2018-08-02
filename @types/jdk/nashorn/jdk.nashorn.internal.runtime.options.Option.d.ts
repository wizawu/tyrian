declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace options {
                    class Option<T> {
                        protected value: T
                        public getValue(): T
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}