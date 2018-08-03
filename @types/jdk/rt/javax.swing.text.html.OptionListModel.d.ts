declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class OptionListModel<E> extends javax.swing.DefaultListModel<E> implements javax.swing.ListSelectionModel , java.io.Serializable {
                    protected listenerList: javax.swing.event.EventListenerList
                    protected leadAnchorNotificationEnabled: boolean
                    public getMinSelectionIndex(): int
                    public getMaxSelectionIndex(): int
                    public getValueIsAdjusting(): boolean
                    public getSelectionMode(): int
                    public setSelectionMode(arg0: int): void
                    public isSelectedIndex(arg0: int): boolean
                    public isSelectionEmpty(): boolean
                    public addListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
                    public removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
                    public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
                    protected fireValueChanged(arg0: boolean): void
                    protected fireValueChanged(arg0: int, arg1: int): void
                    protected fireValueChanged(arg0: int, arg1: int, arg2: boolean): void
                    public setLeadAnchorNotificationEnabled(arg0: boolean): void
                    public isLeadAnchorNotificationEnabled(): boolean
                    public clearSelection(): void
                    public setSelectionInterval(arg0: int, arg1: int): void
                    public addSelectionInterval(arg0: int, arg1: int): void
                    public removeSelectionInterval(arg0: int, arg1: int): void
                    public insertIndexInterval(arg0: int, arg1: int, arg2: boolean): void
                    public removeIndexInterval(arg0: int, arg1: int): void
                    public setValueIsAdjusting(arg0: boolean): void
                    public toString(): string
                    public clone(): java.lang.Object
                    public getAnchorSelectionIndex(): int
                    public getLeadSelectionIndex(): int
                    public setAnchorSelectionIndex(arg0: int): void
                    public setLeadSelectionIndex(arg0: int): void
                    public setInitialSelection(arg0: int): void
                    public getInitialSelection(): java.util.BitSet
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}