declare namespace javax {
  namespace swing {

    class ActionMap implements java.io.Serializable {
      public constructor()
      public setParent(arg0: javax.swing.ActionMap): void
      public getParent(): javax.swing.ActionMap
      public put(arg0: java.lang.Object, arg1: javax.swing.Action): void
      public get(arg0: java.lang.Object): javax.swing.Action
      public remove(arg0: java.lang.Object): void
      public clear(): void
      public keys(): java.lang.Object[]
      public size(): int
      public allKeys(): java.lang.Object[]
    }

  }
}
