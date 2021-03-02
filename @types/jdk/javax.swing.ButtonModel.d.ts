declare namespace javax {
  namespace swing {

    interface ButtonModel extends java.awt.ItemSelectable {
      isArmed(): boolean
      isSelected(): boolean
      isEnabled(): boolean
      isPressed(): boolean
      isRollover(): boolean
      setArmed(arg0: boolean | java.lang.Boolean): void
      setSelected(arg0: boolean | java.lang.Boolean): void
      setEnabled(arg0: boolean | java.lang.Boolean): void
      setPressed(arg0: boolean | java.lang.Boolean): void
      setRollover(arg0: boolean | java.lang.Boolean): void
      setMnemonic(arg0: number | java.lang.Integer): void
      getMnemonic(): number
      setActionCommand(arg0: java.lang.String | string): void
      getActionCommand(): java.lang.String
      setGroup(arg0: javax.swing.ButtonGroup): void
      getGroup(): javax.swing.ButtonGroup
      addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
    }

  }
}
