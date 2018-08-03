declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
                abstract class BaseRow implements java.io.Serializable , java.lang.Cloneable {
                    protected origVals: java.lang.Object[]
                    public constructor()
                    public getOrigRow(): java.lang.Object[]
                    public abstract getColumnObject(arg0: int): java.lang.Object
                    public abstract setColumnObject(arg0: int, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}