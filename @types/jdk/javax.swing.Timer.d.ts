declare namespace javax {
  namespace swing {

    class Timer implements java.io.Serializable {
      protected listenerList: javax.swing.event.EventListenerList
      delayedTimer: javax.swing.TimerQueue$DelayedTimer
      public constructor(arg0: number | java.lang.Integer, arg1: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda)
      getAccessControlContext(): java.security.AccessControlContext
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      protected fireActionPerformed(arg0: java.awt.event.ActionEvent): void
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public static setLogTimers(arg0: boolean | java.lang.Boolean): void
      public static getLogTimers(): boolean
      public setDelay(arg0: number | java.lang.Integer): void
      public getDelay(): number
      public setInitialDelay(arg0: number | java.lang.Integer): void
      public getInitialDelay(): number
      public setRepeats(arg0: boolean | java.lang.Boolean): void
      public isRepeats(): boolean
      public setCoalesce(arg0: boolean | java.lang.Boolean): void
      public isCoalesce(): boolean
      public setActionCommand(arg0: java.lang.String | string): void
      public getActionCommand(): java.lang.String
      public start(): void
      public isRunning(): boolean
      public stop(): void
      public restart(): void
      cancelEvent(): void
      post(): void
      getLock(): java.util.concurrent.locks.Lock
    }

  }
}
