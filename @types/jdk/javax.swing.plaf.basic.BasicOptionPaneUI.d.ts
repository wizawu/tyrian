declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicOptionPaneUI extends javax.swing.plaf.OptionPaneUI {
          public static readonly MinimumWidth: int
          public static readonly MinimumHeight: int
          protected optionPane: javax.swing.JOptionPane
          protected minimumSize: java.awt.Dimension
          protected inputComponent: javax.swing.JComponent
          protected initialFocusComponent: java.awt.Component
          protected hasCustomComponents: boolean
          protected propertyChangeListener: java.beans.PropertyChangeListener
          public constructor()
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected installComponents(): void
          protected uninstallComponents(): void
          protected createLayoutManager(): java.awt.LayoutManager
          protected installListeners(): void
          protected uninstallListeners(): void
          protected createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected installKeyboardActions(): void
          protected uninstallKeyboardActions(): void
          getInputMap(arg0: int): javax.swing.InputMap
          public getMinimumOptionPaneSize(): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected createMessageArea(): java.awt.Container
          protected addMessageComponents(arg0: java.awt.Container, arg1: java.awt.GridBagConstraints, arg2: java.lang.Object, arg3: int, arg4: boolean): void
          protected getMessage(): java.lang.Object
          protected addIcon(arg0: java.awt.Container): void
          protected getIcon(): javax.swing.Icon
          protected getIconForType(arg0: int): javax.swing.Icon
          protected getMaxCharactersPerLineCount(): int
          protected burstStringInto(arg0: java.awt.Container, arg1: java.lang.String, arg2: int): void
          protected createSeparator(): java.awt.Container
          protected createButtonArea(): java.awt.Container
          protected addButtonComponents(arg0: java.awt.Container, arg1: java.lang.Object[], arg2: int): void
          protected createButtonActionListener(arg0: int): java.awt.event.ActionListener
          protected getButtons(): java.lang.Object[]
          protected getSizeButtonsToSameWidth(): boolean
          protected getInitialValueIndex(): int
          protected resetInputValue(): void
          public selectInitialValue(arg0: javax.swing.JOptionPane): void
          public containsCustomComponents(arg0: javax.swing.JOptionPane): boolean
        }

      }
    }
  }
}
