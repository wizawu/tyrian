declare namespace javax {
  namespace swing {

    abstract class AbstractButton extends javax.swing.JComponent implements java.awt.ItemSelectable, javax.swing.SwingConstants {

      public static readonly MODEL_CHANGED_PROPERTY: java.lang.String
      public static readonly TEXT_CHANGED_PROPERTY: java.lang.String
      public static readonly MNEMONIC_CHANGED_PROPERTY: java.lang.String
      public static readonly MARGIN_CHANGED_PROPERTY: java.lang.String
      public static readonly VERTICAL_ALIGNMENT_CHANGED_PROPERTY: java.lang.String
      public static readonly HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: java.lang.String
      public static readonly VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: java.lang.String
      public static readonly HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: java.lang.String
      public static readonly BORDER_PAINTED_CHANGED_PROPERTY: java.lang.String
      public static readonly FOCUS_PAINTED_CHANGED_PROPERTY: java.lang.String
      public static readonly ROLLOVER_ENABLED_CHANGED_PROPERTY: java.lang.String
      public static readonly CONTENT_AREA_FILLED_CHANGED_PROPERTY: java.lang.String
      public static readonly ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly PRESSED_ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly SELECTED_ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly ROLLOVER_ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly DISABLED_ICON_CHANGED_PROPERTY: java.lang.String
      public static readonly DISABLED_SELECTED_ICON_CHANGED_PROPERTY: java.lang.String
      protected model: javax.swing.ButtonModel
      defaultCapable: boolean
      protected changeListener: javax.swing.event.ChangeListener
      protected actionListener: java.awt.event.ActionListener
      protected itemListener: java.awt.event.ItemListener
      protected changeEvent: javax.swing.event.ChangeEvent
      public constructor()
      public setHideActionText(arg0: boolean): void
      public getHideActionText(): boolean
      public getText(): java.lang.String
      public setText(arg0: java.lang.String): void
      public isSelected(): boolean
      public setSelected(arg0: boolean): void
      public doClick(): void
      public doClick(arg0: int): void
      public setMargin(arg0: java.awt.Insets): void
      public getMargin(): java.awt.Insets
      public getIcon(): javax.swing.Icon
      public setIcon(arg0: javax.swing.Icon): void
      public getPressedIcon(): javax.swing.Icon
      public setPressedIcon(arg0: javax.swing.Icon): void
      public getSelectedIcon(): javax.swing.Icon
      public setSelectedIcon(arg0: javax.swing.Icon): void
      public getRolloverIcon(): javax.swing.Icon
      public setRolloverIcon(arg0: javax.swing.Icon): void
      public getRolloverSelectedIcon(): javax.swing.Icon
      public setRolloverSelectedIcon(arg0: javax.swing.Icon): void
      public getDisabledIcon(): javax.swing.Icon
      public setDisabledIcon(arg0: javax.swing.Icon): void
      public getDisabledSelectedIcon(): javax.swing.Icon
      public setDisabledSelectedIcon(arg0: javax.swing.Icon): void
      public getVerticalAlignment(): int
      public setVerticalAlignment(arg0: int): void
      public getHorizontalAlignment(): int
      public setHorizontalAlignment(arg0: int): void
      public getVerticalTextPosition(): int
      public setVerticalTextPosition(arg0: int): void
      public getHorizontalTextPosition(): int
      public setHorizontalTextPosition(arg0: int): void
      public getIconTextGap(): int
      public setIconTextGap(arg0: int): void
      protected checkHorizontalKey(arg0: int, arg1: java.lang.String): int
      protected checkVerticalKey(arg0: int, arg1: java.lang.String): int
      public removeNotify(): void
      public setActionCommand(arg0: java.lang.String): void
      public getActionCommand(): java.lang.String
      public setAction(arg0: javax.swing.Action): void
      public getAction(): javax.swing.Action
      protected configurePropertiesFromAction(arg0: javax.swing.Action): void
      clientPropertyChanged(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): void
      shouldUpdateSelectedStateFromAction(): boolean
      protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String): void
      setIconFromAction(arg0: javax.swing.Action): void
      smallIconChanged(arg0: javax.swing.Action): void
      largeIconChanged(arg0: javax.swing.Action): void
      protected createActionPropertyChangeListener(arg0: javax.swing.Action): java.beans.PropertyChangeListener
      createActionPropertyChangeListener0(arg0: javax.swing.Action): java.beans.PropertyChangeListener
      public isBorderPainted(): boolean
      public setBorderPainted(arg0: boolean): void
      protected paintBorder(arg0: java.awt.Graphics): void
      public isFocusPainted(): boolean
      public setFocusPainted(arg0: boolean): void
      public isContentAreaFilled(): boolean
      public setContentAreaFilled(arg0: boolean): void
      public isRolloverEnabled(): boolean
      public setRolloverEnabled(arg0: boolean): void
      public getMnemonic(): int
      public setMnemonic(arg0: int): void
      public setMnemonic(arg0: char): void
      public setDisplayedMnemonicIndex(arg0: int): void
      public getDisplayedMnemonicIndex(): int
      public setMultiClickThreshhold(arg0: long): void
      public getMultiClickThreshhold(): long
      public getModel(): javax.swing.ButtonModel
      public setModel(arg0: javax.swing.ButtonModel): void
      public getUI(): javax.swing.plaf.ButtonUI
      public setUI(arg0: javax.swing.plaf.ButtonUI): void
      public updateUI(): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      public setLayout(arg0: java.awt.LayoutManager): void
      public addChangeListener(arg0: javax.swing.event.ChangeListener): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public addActionListener(arg0: java.awt.event.ActionListener): void
      public removeActionListener(arg0: java.awt.event.ActionListener): void
      public getActionListeners(): java.awt.event.ActionListener[]
      protected createChangeListener(): javax.swing.event.ChangeListener
      protected fireActionPerformed(arg0: java.awt.event.ActionEvent): void
      protected fireItemStateChanged(arg0: java.awt.event.ItemEvent): void
      protected createActionListener(): java.awt.event.ActionListener
      protected createItemListener(): java.awt.event.ItemListener
      public setEnabled(arg0: boolean): void
      public getLabel(): java.lang.String
      public setLabel(arg0: java.lang.String): void
      public addItemListener(arg0: java.awt.event.ItemListener): void
      public removeItemListener(arg0: java.awt.event.ItemListener): void
      public getItemListeners(): java.awt.event.ItemListener[]
      public getSelectedObjects(): java.lang.Object[]
      protected init(arg0: java.lang.String, arg1: javax.swing.Icon): void
      public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
      setUIProperty(arg0: java.lang.String, arg1: java.lang.Object): void
      protected paramString(): java.lang.String
      public getUI(): javax.swing.plaf.ComponentUI
      static access$000(arg0: javax.swing.AbstractButton): javax.accessibility.AccessibleContext
    }

  }
}
