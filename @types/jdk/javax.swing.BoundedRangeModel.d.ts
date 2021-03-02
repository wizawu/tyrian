declare namespace javax {
  namespace swing {

    interface BoundedRangeModel {
      getMinimum(): number
      setMinimum(arg0: number | java.lang.Integer): void
      getMaximum(): number
      setMaximum(arg0: number | java.lang.Integer): void
      getValue(): number
      setValue(arg0: number | java.lang.Integer): void
      setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      getValueIsAdjusting(): boolean
      getExtent(): number
      setExtent(arg0: number | java.lang.Integer): void
      setRangeProperties(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
    }

  }
}
