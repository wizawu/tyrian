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
          getInputMap(arg0: number | java.lang.Integer): javax.swing.InputMap
          public getMinimumOptionPaneSize(): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected createMessageArea(): java.awt.Container
          protected addMessageComponents(arg0: java.awt.Container, arg1: java.awt.GridBagConstraints, arg2: java.lang.Object | any, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
          protected getMessage(): java.lang.Object
          protected addIcon(arg0: java.awt.Container): void
          protected getIcon(): javax.swing.Icon
          protected getIconForType(arg0: number | java.lang.Integer): javax.swing.Icon
          protected getMaxCharactersPerLineCount(): number
          protected burstStringInto(arg0: java.awt.Container, arg1: java.lang.String | string, arg2: number | java.lang.Integer): void
          protected createSeparator(): java.awt.Container
          protected createButtonArea(): java.awt.Container
          protected addButtonComponents(arg0: java.awt.Container, arg1: java.lang.Object[] | any[], arg2: number | java.lang.Integer): void
          protected createButtonActionListener(arg0: number | java.lang.Integer): java.awt.event.ActionListener
          protected getButtons(): java.lang.Object[]
          protected getSizeButtonsToSameWidth(): boolean
          protected getInitialValueIndex(): number
          protected resetInputValue(): void
          public selectInitialValue(arg0: javax.swing.JOptionPane): void
          public containsCustomComponents(arg0: javax.swing.JOptionPane): boolean
        }

      }
    }
  }
}
