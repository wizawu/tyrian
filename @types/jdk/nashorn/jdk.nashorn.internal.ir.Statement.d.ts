declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class Statement extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.Terminal {
                    public constructor(arg0: int, arg1: long, arg2: int)
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.Statement | jdk.nashorn.internal.ir.Statement$$Lambda)
                    public getLineNumber(): int
                    public isTerminal(): boolean
                    public hasGoto(): boolean
                    public hasTerminalFlags(): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class Statement$$Lambda extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.Terminal {
                    public constructor(arg0: int, arg1: long, arg2: int)
                }
            }
        }
    }
}