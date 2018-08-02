declare namespace javax {
    namespace swing {
        interface ListSelectionModel {
            SINGLE_SELECTION: int
            SINGLE_INTERVAL_SELECTION: int
            MULTIPLE_INTERVAL_SELECTION: int
            setSelectionInterval(arg0: int, arg1: int): void
            addSelectionInterval(arg0: int, arg1: int): void
            removeSelectionInterval(arg0: int, arg1: int): void
            getMinSelectionIndex(): int
            getMaxSelectionIndex(): int
            isSelectedIndex(arg0: int): boolean
            getAnchorSelectionIndex(): int
            setAnchorSelectionIndex(arg0: int): void
            getLeadSelectionIndex(): int
            setLeadSelectionIndex(arg0: int): void
            clearSelection(): void
            isSelectionEmpty(): boolean
            insertIndexInterval(arg0: int, arg1: int, arg2: boolean): void
            removeIndexInterval(arg0: int, arg1: int): void
            setValueIsAdjusting(arg0: boolean): void
            getValueIsAdjusting(): boolean
            setSelectionMode(arg0: int): void
            getSelectionMode(): int
            addListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
            removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
        }
    }
}