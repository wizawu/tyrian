declare namespace javax {
    namespace swing {
        namespace undo {
interface StateEditable {
    RCSID: string
    storeState(arg0: java.util.Hashtable<java.lang.Object, java.lang.Object>): void
    restoreState(arg0: java.util.Hashtable<any, any>): void
}

        }
    }
}