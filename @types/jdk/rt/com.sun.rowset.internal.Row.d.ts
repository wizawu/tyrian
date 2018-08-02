declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
                class Row extends com.sun.rowset.internal.BaseRow implements java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: java.lang.Object[])
                    public initColumnObject(arg0: int, arg1: java.lang.Object): void
                    public setColumnObject(arg0: int, arg1: java.lang.Object): void
                    public getColumnObject(arg0: int): java.lang.Object
                    public getColUpdated(arg0: int): boolean
                    public setDeleted(): void
                    public getDeleted(): boolean
                    public clearDeleted(): void
                    public setInserted(): void
                    public getInserted(): boolean
                    public clearInserted(): void
                    public getUpdated(): boolean
                    public setUpdated(): void
                    public clearUpdated(): void
                    public moveCurrentToOrig(): void
                    public getCurrentRow(): com.sun.rowset.internal.BaseRow
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}