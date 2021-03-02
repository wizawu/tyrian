declare namespace javax {
  namespace accessibility {

    class AccessibleStateSet {
      protected states: java.util.Vector<javax.accessibility.AccessibleState>
      public constructor()
      public constructor(arg0: javax.accessibility.AccessibleState[])
      public add(arg0: javax.accessibility.AccessibleState): boolean
      public addAll(arg0: javax.accessibility.AccessibleState[]): void
      public remove(arg0: javax.accessibility.AccessibleState): boolean
      public clear(): void
      public contains(arg0: javax.accessibility.AccessibleState): boolean
      public toArray(): javax.accessibility.AccessibleState[]
      public toString(): java.lang.String
    }

  }
}
