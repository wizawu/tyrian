declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class OptimisticTypesPersistence {
                    public constructor()
                    public static getLocationDescriptor(arg0: jdk.nashorn.internal.runtime.Source, arg1: int, arg2: jdk.nashorn.internal.codegen.types.Type[]): java.lang.Object
                    public static store(arg0: java.lang.Object, arg1: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>): void
                    public static load(arg0: java.lang.Object): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                    public static getVersionDirName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}