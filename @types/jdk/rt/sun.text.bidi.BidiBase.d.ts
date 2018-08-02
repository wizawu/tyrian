declare namespace sun {
    namespace text {
        namespace bidi {
            class BidiBase {
                public static INTERNAL_LEVEL_DEFAULT_LTR: byte
                public static INTERNAL_LEVEL_DEFAULT_RTL: byte
                public static MAX_EXPLICIT_LEVEL: byte
                public static INTERNAL_LEVEL_OVERRIDE: byte
                public static MAP_NOWHERE: int
                public static MIXED: byte
                public static DO_MIRRORING: short
                public length: int
                public verifyValidPara(): void
                public verifyValidParaOrLine(): void
                public verifyRange(arg0: int, arg1: int, arg2: int): void
                public verifyIndex(arg0: int, arg1: int, arg2: int): void
                public constructor(arg0: int, arg1: int)
                public setPara(arg0: char[], arg1: byte, arg2: byte[]): void
                public setPara(arg0: java.text.AttributedCharacterIterator): void
                public getLength(): int
                public getParaLevel(): byte
                public getParagraphIndex(arg0: int): int
                public setLine(arg0: java.text.Bidi, arg1: sun.text.bidi.BidiBase, arg2: java.text.Bidi, arg3: sun.text.bidi.BidiBase, arg4: int, arg5: int): java.text.Bidi
                public getLevelAt(arg0: int): byte
                public countRuns(): int
                public constructor(arg0: char[], arg1: int, arg2: byte[], arg3: int, arg4: int, arg5: int)
                public isMixed(): boolean
                public isLeftToRight(): boolean
                public isRightToLeft(): boolean
                public baseIsLeftToRight(): boolean
                public getBaseLevel(): int
                public getRunLevel(arg0: int): int
                public getRunStart(arg0: int): int
                public getRunLimit(arg0: int): int
                public static requiresBidi(arg0: char[], arg1: int, arg2: int): boolean
                public static reorderVisually(arg0: byte[], arg1: int, arg2: java.lang.Object[], arg3: int, arg4: int): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}