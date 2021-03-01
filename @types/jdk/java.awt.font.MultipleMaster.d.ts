declare namespace java {
  namespace awt {
    namespace font {

      interface MultipleMaster {

        getNumDesignAxes(): int
        getDesignAxisRanges(): float[]
        getDesignAxisDefaults(): float[]
        getDesignAxisNames(): java.lang.String[]
        deriveMMFont(arg0: float[]): java.awt.Font
        deriveMMFont(arg0: float[], arg1: float, arg2: float, arg3: float, arg4: float): java.awt.Font
      }

    }
  }
}
