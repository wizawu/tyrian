declare namespace javax {
    namespace swing {
        namespace colorchooser {
            interface ColorSelectionModel {
                getSelectedColor(): java.awt.Color
                setSelectedColor(arg0: java.awt.Color): void
                addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
                removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$Lambda): void
            }
        }
    }
}