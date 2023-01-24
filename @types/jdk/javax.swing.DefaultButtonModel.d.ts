declare namespace javax {
  namespace swing {
    class DefaultButtonModel implements javax.swing.ButtonModel, java.io.Serializable {
      protected stateMask: int
      protected actionCommand: java.lang.String
      protected group: javax.swing.ButtonGroup
      protected mnemonic: int
      protected changeEvent: javax.swing.event.ChangeEvent
      protected listenerList: javax.swing.event.EventListenerList
      public static readonly ARMED: int
      public static readonly SELECTED: int
      public static readonly PRESSED: int
      public static readonly ENABLED: int
      public static readonly ROLLOVER: int
      public constructor()
      public setActionCommand(arg0: java.lang.String | string): void
      public getActionCommand(): java.lang.String
      public isArmed(): boolean
      public isSelected(): boolean
      public isEnabled(): boolean
      public isPressed(): boolean
      public isRollover(): boolean
      public setArmed(arg0: boolean | java.lang.Boolean): void
      public setEnabled(arg0: boolean | java.lang.Boolean): void
      public setSelected(arg0: boolean | java.lang.Boolean): void
      public setPressed(arg0: boolean | java.lang.Boolean): void
      public setRollover(arg0: boolean | java.lang.Boolean): void
      public setMnemonic(arg0: number | java.lang.Integer): void
      public getMnemonic(): number
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(
        arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
      ): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      protected fireActionPerformed(arg0: java.awt.event.ActionEvent): void
      public addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public getItemListeners(): java.awt.event.ItemListener[]
      protected fireItemStateChanged(arg0: java.awt.event.ItemEvent): void
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public getSelectedObjects(): java.lang.Object[]
      public setGroup(arg0: javax.swing.ButtonGroup): void
      public getGroup(): javax.swing.ButtonGroup
      isMenuItem(): boolean
      setMenuItem(arg0: boolean | java.lang.Boolean): void
    }
  }
}
