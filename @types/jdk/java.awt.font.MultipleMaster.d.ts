declare namespace java {
  namespace awt {
    namespace font {
      interface MultipleMaster {
        getNumDesignAxes(): number
        getDesignAxisRanges(): number[]
        getDesignAxisDefaults(): number[]
        getDesignAxisNames(): java.lang.String[]
        deriveMMFont(arg0: number[] | java.lang.Float[]): java.awt.Font
        deriveMMFont(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float,
          arg4: number | java.lang.Float
        ): java.awt.Font
      }
    }
  }
}
