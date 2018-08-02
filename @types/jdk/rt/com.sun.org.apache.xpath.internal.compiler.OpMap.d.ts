declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace compiler {
class OpMap {
    protected m_currentPattern: string
    public static MAPINDEX_LENGTH: int
    public constructor()
    public toString(): string
    public getPatternString(): string
    public getTokenQueue(): com.sun.org.apache.xml.internal.utils.ObjectVector
    public getToken(arg0: int): java.lang.Object
    public getTokenQueueSize(): int
    public getOpMap(): com.sun.org.apache.xpath.internal.compiler.OpMapVector
    public getOp(arg0: int): int
    public setOp(arg0: int, arg1: int): void
    public getNextOpPos(arg0: int): int
    public getNextStepPos(arg0: int): int
    public static getNextOpPos(arg0: int[], arg1: int): int
    public getFirstPredicateOpPos(arg0: int): int
    public error(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public static getFirstChildPos(arg0: int): int
    public getArgLength(arg0: int): int
    public getArgLengthOfStep(arg0: int): int
    public static getFirstChildPosOfStep(arg0: int): int
    public getStepTestType(arg0: int): int
    public getStepNS(arg0: int): string
    public getStepLocalName(arg0: int): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}