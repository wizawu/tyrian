declare namespace javax {
    namespace swing {
        class DefaultListSelectionModel implements javax.swing.ListSelectionModel , java.lang.Cloneable , java.io.Serializable {
            protected listenerList: javax.swing.event.EventListenerList
            protected leadAnchorNotificationEnabled: boolean
            public constructor()
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
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            public setLeadAnchorNotificationEnabled<T extends java.util.EventListener>(arg0: boolean): void
            public isLeadAnchorNotificationEnabled<T extends java.util.EventListener>(): boolean
            public clearSelection<T extends java.util.EventListener>(): void
            public setSelectionInterval<T extends java.util.EventListener>(arg0: int, arg1: int): void
            public addSelectionInterval<T extends java.util.EventListener>(arg0: int, arg1: int): void
            public removeSelectionInterval<T extends java.util.EventListener>(arg0: int, arg1: int): void
            public insertIndexInterval<T extends java.util.EventListener>(arg0: int, arg1: int, arg2: boolean): void
            public removeIndexInterval<T extends java.util.EventListener>(arg0: int, arg1: int): void
            public setValueIsAdjusting<T extends java.util.EventListener>(arg0: boolean): void
            public toString<T extends java.util.EventListener>(): string
            public clone<T extends java.util.EventListener>(): java.lang.Object
            public getAnchorSelectionIndex<T extends java.util.EventListener>(): int
            public getLeadSelectionIndex<T extends java.util.EventListener>(): int
            public setAnchorSelectionIndex<T extends java.util.EventListener>(arg0: int): void
            public moveLeadSelectionIndex<T extends java.util.EventListener>(arg0: int): void
            public setLeadSelectionIndex<T extends java.util.EventListener>(arg0: int): void
            public static class: java.lang.Class<any>
        }
    }
}