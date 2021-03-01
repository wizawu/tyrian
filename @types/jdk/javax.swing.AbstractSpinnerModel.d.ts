declare namespace javax {
  namespace swing {

    abstract class AbstractSpinnerModel implements javax.swing.SpinnerModel, java.io.Serializable {

      protected listenerList: javax.swing.event.EventListenerList
      public constructor()
      public addChangeListener(arg0: javax.swing.event.ChangeListener): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    }

  }
}
