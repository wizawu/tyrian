declare namespace javax {
    namespace swing {
abstract class AbstractListModel<E> implements javax.swing.ListModel<E> , java.io.Serializable {
    protected listenerList: javax.swing.event.EventListenerList
    public constructor()
    public addListDataListener(arg0: javax.swing.event.ListDataListener): void
    public removeListDataListener(arg0: javax.swing.event.ListDataListener): void
    public getListDataListeners(): javax.swing.event.ListDataListener[]
    protected fireContentsChanged(arg0: java.lang.Object, arg1: int, arg2: int): void
    protected fireIntervalAdded(arg0: java.lang.Object, arg1: int, arg2: int): void
    protected fireIntervalRemoved(arg0: java.lang.Object, arg1: int, arg2: int): void
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    public static class: java.lang.Class<any>
}

    }
}