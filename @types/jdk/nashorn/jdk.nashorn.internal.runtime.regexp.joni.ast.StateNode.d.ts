declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
abstract class StateNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.NodeStatus {
    protected state: int
    public constructor()
    public toString(arg0: int): string
    public stateToString(): string
    public isMinFixed(): boolean
    public setMinFixed(): void
    public isMaxFixed(): boolean
    public setMaxFixed(): void
    public isCLenFixed(): boolean
    public setCLenFixed(): void
    public isMark1(): boolean
    public setMark1(): void
    public isMark2(): boolean
    public setMark2(): void
    public clearMark2(): void
    public isMemBackrefed(): boolean
    public setMemBackrefed(): void
    public isStopBtSimpleRepeat(): boolean
    public setStopBtSimpleRepeat(): void
    public isRecursion(): boolean
    public setRecursion(): void
    public isCalled(): boolean
    public setCalled(): void
    public isAddrFixed(): boolean
    public setAddrFixed(): void
    public isInRepeat(): boolean
    public setInRepeat(): void
    public isNestLevel(): boolean
    public setNestLevel(): void
    public isByNumber(): boolean
    public setByNumber(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}