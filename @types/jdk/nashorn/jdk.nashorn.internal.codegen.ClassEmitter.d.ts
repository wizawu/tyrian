declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class ClassEmitter {
                    protected readonly cw: jdk.internal.org.objectweb.asm.ClassWriter
                    protected readonly context: jdk.nashorn.internal.runtime.Context
                    public getMethodNames(): java.util.Set<java.lang.String>
                    public getMethodCount(): int
                    public getClinitCount(): int
                    public getInitCount(): int
                    public getFieldCount(): int
                    public begin(): void
                    public end(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}