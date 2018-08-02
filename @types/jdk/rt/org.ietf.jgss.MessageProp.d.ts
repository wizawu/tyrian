declare namespace org {
    namespace ietf {
        namespace jgss {
            class MessageProp {
                public constructor(arg0: boolean)
                public constructor(arg0: int, arg1: boolean)
                public getQOP(): int
                public getPrivacy(): boolean
                public setQOP(arg0: int): void
                public setPrivacy(arg0: boolean): void
                public isDuplicateToken(): boolean
                public isOldToken(): boolean
                public isUnseqToken(): boolean
                public isGapToken(): boolean
                public getMinorStatus(): int
                public getMinorString(): string
                public setSupplementaryStates(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}