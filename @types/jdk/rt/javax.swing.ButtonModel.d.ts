declare namespace javax {
    namespace swing {
interface ButtonModel extends java.awt.ItemSelectable {
    isArmed(): boolean
    isSelected(): boolean
    isEnabled(): boolean
    isPressed(): boolean
    isRollover(): boolean
    setArmed(arg0: boolean): void
    setSelected(arg0: boolean): void
    setEnabled(arg0: boolean): void
    setPressed(arg0: boolean): void
    setRollover(arg0: boolean): void
    setMnemonic(arg0: int): void
    getMnemonic(): int
    setActionCommand(arg0: java.lang.String | string): void
    getActionCommand(): string
    setGroup(arg0: javax.swing.ButtonGroup): void
    addActionListener(arg0: java.awt.event.ActionListener): void
    removeActionListener(arg0: java.awt.event.ActionListener): void
    addItemListener(arg0: java.awt.event.ItemListener): void
    removeItemListener(arg0: java.awt.event.ItemListener): void
    addChangeListener(arg0: javax.swing.event.ChangeListener): void
    removeChangeListener(arg0: javax.swing.event.ChangeListener): void
}

    }
}