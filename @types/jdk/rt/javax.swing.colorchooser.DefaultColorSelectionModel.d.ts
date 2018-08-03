declare namespace javax {
    namespace swing {
        namespace colorchooser {
            class DefaultColorSelectionModel implements javax.swing.colorchooser.ColorSelectionModel , java.io.Serializable {
                protected changeEvent: javax.swing.event.ChangeEvent
                protected listenerList: javax.swing.event.EventListenerList
                public constructor()
                public constructor(arg0: java.awt.Color)
                public getSelectedColor(): java.awt.Color
                public setSelectedColor(arg0: java.awt.Color): void
                public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
                public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
                public getChangeListeners(): javax.swing.event.ChangeListener[]
                protected fireStateChanged(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}