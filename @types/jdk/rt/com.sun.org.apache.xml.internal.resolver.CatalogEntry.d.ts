declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
class CatalogEntry {
    protected static nextEntry: java.util.concurrent.atomic.AtomicInteger
    protected static entryTypes: java.util.Map<java.lang.String, java.lang.Integer>
    protected static entryArgs: java.util.Vector
    protected entryType: int
    protected args: java.util.Vector
    public static getEntryType(arg0: java.lang.String | string): int
    public static getEntryArgCount(arg0: java.lang.String | string): int
    public static getEntryArgCount(arg0: int): int
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.util.Vector)
    public constructor(arg0: int, arg1: java.util.Vector)
    public getEntryType(): int
    public getEntryArg(arg0: int): string
    public setEntryArg(arg0: int, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}