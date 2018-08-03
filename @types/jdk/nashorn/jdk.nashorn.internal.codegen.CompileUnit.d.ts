declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class CompileUnit implements java.lang.Comparable<jdk.nashorn.internal.codegen.CompileUnit> , java.io.Serializable {
                    public static getEmittedUnitCount(): int
                    public isUsed(): boolean
                    public hasCode(): boolean
                    public setUsed(): void
                    public getCode(): java.lang.Class<any>
                    public isInitializing(arg0: jdk.nashorn.internal.runtime.RecompilableScriptFunctionData, arg1: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public canHold(arg0: long): boolean
                    public getClassEmitter(): jdk.nashorn.internal.codegen.ClassEmitter
                    public getUnitClassName(): string
                    public toString(): string
                    public compareTo(arg0: jdk.nashorn.internal.codegen.CompileUnit): int
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}