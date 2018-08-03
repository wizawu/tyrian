declare namespace java {
    namespace awt {
        interface ItemSelectable {
            getSelectedObjects(): java.lang.Object[]
            addItemListener(arg0: java.awt.event.ItemListener): void
            removeItemListener(arg0: java.awt.event.ItemListener): void
        }
    }
}