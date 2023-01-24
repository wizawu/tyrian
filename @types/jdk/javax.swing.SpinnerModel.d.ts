declare namespace javax {
  namespace swing {
    interface SpinnerModel {
      getValue(): java.lang.Object
      setValue(arg0: java.lang.Object | any): void
      getNextValue(): java.lang.Object
      getPreviousValue(): java.lang.Object
      addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
    }
  }
}
