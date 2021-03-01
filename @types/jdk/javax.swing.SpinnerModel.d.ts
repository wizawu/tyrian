declare namespace javax {
  namespace swing {

    interface SpinnerModel {

      getValue(): java.lang.Object
      setValue(arg0: java.lang.Object): void
      getNextValue(): java.lang.Object
      getPreviousValue(): java.lang.Object
      addChangeListener(arg0: javax.swing.event.ChangeListener): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener): void
    }

  }
}
