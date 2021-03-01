declare namespace javax {
  namespace swing {

    interface BoundedRangeModel {

      getMinimum(): int
      setMinimum(arg0: int): void
      getMaximum(): int
      setMaximum(arg0: int): void
      getValue(): int
      setValue(arg0: int): void
      setValueIsAdjusting(arg0: boolean): void
      getValueIsAdjusting(): boolean
      getExtent(): int
      setExtent(arg0: int): void
      setRangeProperties(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
      addChangeListener(arg0: javax.swing.event.ChangeListener): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener): void
    }

  }
}
