declare namespace javax {
    namespace swing {
        namespace colorchooser {
interface ColorSelectionModel {
    getSelectedColor(): java.awt.Color
    setSelectedColor(arg0: java.awt.Color): void
    addChangeListener(arg0: javax.swing.event.ChangeListener): void
    removeChangeListener(arg0: javax.swing.event.ChangeListener): void
}

        }
    }
}