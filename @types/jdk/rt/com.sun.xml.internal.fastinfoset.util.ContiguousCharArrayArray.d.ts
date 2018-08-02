declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
class ContiguousCharArrayArray extends com.sun.xml.internal.fastinfoset.util.ValueArray {
    public static INITIAL_CHARACTER_SIZE: int
    public static MAXIMUM_CHARACTER_SIZE: int
    protected _maximumCharacterSize: int
    public _offset: int[]
    public _length: int[]
    public _array: char[]
    public _arrayIndex: int
    public _readOnlyArrayIndex: int
    public _cachedIndex: int
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
    public constructor()
    public clear(): void
    public getArrayIndex(): int
    public setReadOnlyArray(arg0: com.sun.xml.internal.fastinfoset.util.ValueArray, arg1: boolean): void
    public setReadOnlyArray(arg0: com.sun.xml.internal.fastinfoset.util.ContiguousCharArrayArray, arg1: boolean): void
    public getCompleteCharArray(): char[]
    public getCompleteOffsetArray(): int[]
    public getCompleteLengthArray(): int[]
    public getString(arg0: int): string
    public ensureSize(arg0: int): void
    public add(arg0: int): void
    public add(arg0: char[], arg1: int): int
    protected resize(): void
    protected resizeArray(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}