declare namespace com {
    namespace sun {
        namespace java_cup {
            namespace internal {
                namespace runtime {
class virtual_parse_stack {
    protected real_stack: java.util.Stack
    protected real_next: int
    protected vstack: java.util.Stack
    public constructor(arg0: java.util.Stack)
    protected get_from_real(): void
    public empty(): boolean
    public top(): int
    public pop(): void
    public push(arg0: int): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}