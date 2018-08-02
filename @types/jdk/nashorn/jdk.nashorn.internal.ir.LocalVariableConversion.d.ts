declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class LocalVariableConversion {
                    public constructor(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type, arg3: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public getFrom(): jdk.nashorn.internal.codegen.types.Type
                    public getTo(): jdk.nashorn.internal.codegen.types.Type
                    public getNext(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public getSymbol(): jdk.nashorn.internal.ir.Symbol
                    public isLive(): boolean
                    public isAnyLive(): boolean
                    public static hasLiveConversion(arg0: jdk.nashorn.internal.ir.JoinPredecessor): boolean
                    public toString(): string
                    public toString(arg0: java.lang.StringBuilder): java.lang.StringBuilder
                    public static toString(arg0: jdk.nashorn.internal.ir.LocalVariableConversion, arg1: java.lang.StringBuilder): java.lang.StringBuilder
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}