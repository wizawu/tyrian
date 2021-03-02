declare namespace javax {
  namespace swing {

    class DefaultBoundedRangeModel implements javax.swing.BoundedRangeModel, java.io.Serializable {
      protected changeEvent: javax.swing.event.ChangeEvent
      protected listenerList: javax.swing.event.EventListenerList
      public constructor()
      public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      public getValue(): int
      public getExtent(): int
      public getMinimum(): int
      public getMaximum(): int
      public setValue(arg0: int): void
      public setExtent(arg0: int): void
      public setMinimum(arg0: int): void
      public setMaximum(arg0: int): void
      public setValueIsAdjusting(arg0: boolean): void
      public getValueIsAdjusting(): boolean
      public setRangeProperties(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean): void
      public addChangeListener(arg0: javax.swing.event.ChangeListener): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public toString(): java.lang.String
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    }

  }
}
