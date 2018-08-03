declare namespace javax {
    namespace swing {
        class DefaultSingleSelectionModel implements javax.swing.SingleSelectionModel , java.io.Serializable {
            protected changeEvent: javax.swing.event.ChangeEvent
            protected listenerList: javax.swing.event.EventListenerList
            public constructor()
            public getSelectedIndex(): int
            public setSelectedIndex(arg0: int): void
            public clearSelection(): void
            public isSelected(): boolean
            public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
            public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            protected fireStateChanged(): void
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            public static class: java.lang.Class<any>
        }
    }
}