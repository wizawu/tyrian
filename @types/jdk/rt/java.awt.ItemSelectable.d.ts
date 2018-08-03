declare namespace java {
    namespace awt {
        interface ItemSelectable {
            getSelectedObjects(): java.lang.Object[]
            addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$Lambda): void
            removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$Lambda): void
        }
    }
}