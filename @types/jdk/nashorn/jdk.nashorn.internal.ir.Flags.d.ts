declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                interface Flags<T extends jdk.nashorn.internal.ir.LexicalContextNode> {
                    getFlags(): int
                    getFlag(arg0: int): boolean
                    clearFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                    setFlag(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                    setFlags(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: int): T
                }
            }
        }
    }
}