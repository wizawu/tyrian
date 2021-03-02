declare namespace javax {
  namespace swing {

    class DefaultBoundedRangeModel implements javax.swing.BoundedRangeModel, java.io.Serializable {
      protected changeEvent: javax.swing.event.ChangeEvent
      protected listenerList: javax.swing.event.EventListenerList
      public constructor()
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public getValue(): number
      public getExtent(): number
      public getMinimum(): number
      public getMaximum(): number
      public setValue(arg0: number | java.lang.Integer): void
      public setExtent(arg0: number | java.lang.Integer): void
      public setMinimum(arg0: number | java.lang.Integer): void
      public setMaximum(arg0: number | java.lang.Integer): void
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public getValueIsAdjusting(): boolean
      public setRangeProperties(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public toString(): java.lang.String
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    }

  }
}
