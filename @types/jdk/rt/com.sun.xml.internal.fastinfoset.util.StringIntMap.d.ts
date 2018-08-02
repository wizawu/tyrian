declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
class StringIntMap extends com.sun.xml.internal.fastinfoset.util.KeyIntMap {
    protected static NULL_ENTRY: com.sun.xml.internal.fastinfoset.util.StringIntMap$Entry
    protected _readOnlyMap: com.sun.xml.internal.fastinfoset.util.StringIntMap
    protected _lastEntry: com.sun.xml.internal.fastinfoset.util.StringIntMap$Entry
    protected _table: com.sun.xml.internal.fastinfoset.util.StringIntMap$Entry[]
    protected _index: int
    protected _totalCharacterCount: int
    public constructor(arg0: int, arg1: float)
    public constructor(arg0: int)
    public constructor()
    public clear(): void
    public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.KeyIntMap, arg1: boolean): void
    public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.StringIntMap, arg1: boolean): void
    public getNextIndex(): int
    public getIndex(): int
    public obtainIndex(arg0: java.lang.String | string): int
    public add(arg0: java.lang.String | string): void
    public get(arg0: java.lang.String | string): int
    public getTotalCharacterCount(): int
    protected resize(arg0: int): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}