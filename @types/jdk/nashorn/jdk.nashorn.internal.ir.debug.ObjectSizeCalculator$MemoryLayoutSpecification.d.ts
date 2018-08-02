declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace debug {
                    interface ObjectSizeCalculator$MemoryLayoutSpecification {
                        getArrayHeaderSize(): int
                        getObjectHeaderSize(): int
                        getObjectPadding(): int
                        getReferenceSize(): int
                        getSuperclassFieldPadding(): int
                    }
                }
            }
        }
    }
}