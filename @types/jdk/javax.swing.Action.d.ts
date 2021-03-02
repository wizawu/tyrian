declare namespace javax {
  namespace swing {

    interface Action extends java.awt.event.ActionListener {
      public static readonly DEFAULT: java.lang.String
      public static readonly NAME: java.lang.String
      public static readonly SHORT_DESCRIPTION: java.lang.String
      public static readonly LONG_DESCRIPTION: java.lang.String
      public static readonly SMALL_ICON: java.lang.String
      public static readonly ACTION_COMMAND_KEY: java.lang.String
      public static readonly ACCELERATOR_KEY: java.lang.String
      public static readonly MNEMONIC_KEY: java.lang.String
      public static readonly SELECTED_KEY: java.lang.String
      public static readonly DISPLAYED_MNEMONIC_INDEX_KEY: java.lang.String
      public static readonly LARGE_ICON_KEY: java.lang.String
      getValue(arg0: java.lang.String | string): java.lang.Object
      putValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      setEnabled(arg0: boolean | java.lang.Boolean): void
      isEnabled(): boolean
      accept(arg0: java.lang.Object | any): boolean
      addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
    }

  }
}
