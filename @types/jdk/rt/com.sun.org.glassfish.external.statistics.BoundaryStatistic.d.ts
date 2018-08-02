declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        interface BoundaryStatistic extends com.sun.org.glassfish.external.statistics.Statistic {
                            getUpperBound(): long
                            getLowerBound(): long
                        }
                    }
                }
            }
        }
    }
}