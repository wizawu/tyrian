declare namespace java {
  namespace awt {

    class GridBagLayoutInfo implements java.io.Serializable {
      width: int
      height: int
      startx: int
      starty: int
      minWidth: int[]
      minHeight: int[]
      weightX: double[]
      weightY: double[]
      hasBaseline: boolean
      baselineType: short[]
      maxAscent: int[]
      maxDescent: int[]
      constructor(arg0: int, arg1: int)
      hasConstantDescent(arg0: int): boolean
      hasBaseline(arg0: int): boolean
    }

  }
}
